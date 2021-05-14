import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    //useEffect fires a function everytime depencency 'file' changes value. Sort of like a callbackFn

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url =  await storageRef.getDownloadURL();
            let createdAt = timestamp();
            collectionRef.add({url, createdAt})
            setUrl(url);
        });
    }, [file])

    return {progress, url, error}

}

export default useStorage;
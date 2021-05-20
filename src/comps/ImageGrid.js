import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {BsTrashFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {

    const {docs, setDocs} = useFirestore('images');
    console.log(docs);

    const handleTrash = (e) =>{
        setDocs([])
    }
    
    return(
        <div className="img-grid"
         aria-label="List of images">
            {docs && docs.map (doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={()=>setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}    
                    />
                </motion.div>
            ))}
            <BsTrashFill
                onClick={handleTrash}
            />
        </div>
    )
}

export default ImageGrid;
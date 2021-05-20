import React from 'react';
import {motion} from 'framer-motion'

const Modal = ({selectedImg, setSelectedImg}) =>{

    const handleClick = (e) => {
        let target = e.target;
        if(target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return(
        <motion.div className="backdrop"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            onClick={handleClick}
        >
            <motion.img src={selectedImg} alt="enlarged pic"
                initial={{y: "-100vh"}}
                animate={{y: 0}}
            />
        </motion.div>
    )
}

export default Modal;
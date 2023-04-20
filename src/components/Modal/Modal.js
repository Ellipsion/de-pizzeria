import React from 'react';
import styles from "./Modal.module.css"

import { easeIn, motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            ease: easeIn,
            duration: 0.3
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            <AnimatePresence onExitComplete={() => setShowModal(false)}>

                {
                    showModal && (
                        <motion.div
                            onClick={() => setShowModal(false)}
                            className={styles.backdrop}
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >

                        </motion.div>)

                }
            </AnimatePresence>
        </>
    );
}

export default Modal;

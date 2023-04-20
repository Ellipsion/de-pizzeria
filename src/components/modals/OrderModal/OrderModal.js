import React, { useEffect, useState } from "react";
import styles from "./OrderModal.module.css"

import { easeIn, motion, AnimatePresence, stagger, delay } from 'framer-motion';
import pizzaBoyIllustration from "../../../assets/illustrations/pizza-boy.png"

const backdropVariants = {
  // hidden: { opacity: 0, borderRadius: "50%", scale: 0.1 },
  hidden: {
    opacity: 1
  },
  // visible: {
  //   opacity: 1,
  //   scale: 1,
  //   borderRadius: ["50%", 0],
  //   transition: {
  //     ease: easeIn,
  //     duration: 0.2
  //   }
  // },
  visible: {
    opacity: 1,
    transition: {
      ease: easeIn,
      duration: 0.2
    }
  },
  exit: {
    scale: 0,
    opacity: 0,
    borderRadius: "50%"
  }
}

const imageVariants = {
  hidden: {


  },
  visible: {
    x: '100vw',
    transition: {
      duration: 2,
      delay: 0.5
    }
  }
}

const OrderModal = ({ showModal }) => {


  return (
    <>
      <AnimatePresence >
        {
          showModal && (
            <motion.div
              // onClick={() => setShowModal(false)}
              className={styles.backdrop}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={styles.imageDiv}>
                <motion.img
                  className={styles.image}
                  src={pizzaBoyIllustration}
                  alt="pizza boy"
                  variants={imageVariants}
                />
              </div>
            </motion.div>

          )
        }
      </AnimatePresence >
    </>
  );
};

export default OrderModal;

import { motion, AnimatePresence } from "framer-motion";
import { menuVariants } from "../utils/data/motion-objects";

export default function Menu({ styles, menuState }){

  return (
    <AnimatePresence>
      { menuState.menu && <motion.div className={ `${styles.menu} ${styles.mobileMenu}` }
        initial='hidden' 
        animate='visable'
        exit='exit'
        variants={ menuVariants }     
        >
        <ul>
          <a href=""><li>About Us</li></a>
          <a href=""><li>Dental Services</li></a>
          <a href=""><li>Our Team</li></a>
          <a href=""><li>Patient Resources</li></a>
          <a href=""><li>Contact us</li></a>
        </ul>
      </motion.div>}
    </AnimatePresence>
  );
}
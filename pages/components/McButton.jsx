import { motion, AnimatePresence, useCycle } from "framer-motion";
import { mcButton, mcTop, mcMiddle, mcBottom } from "../data/motion-objects";

export default function McButton({ styles, menuState }) {

  return (
    <>
      <AnimatePresence>
      {/* Menu Button Change to Burger OR CLOSE*/}
        {!menuState.menu && <motion.div
          initial="start"
          animate="animate"
          exit="exit"
          variants={ mcButton }
          className={ styles.mcButton } 
          onClick={ menuState.cycleMenu }>
          <motion.b variants={ mcTop.closed } id={ styles.mcTop } className={ styles.buttonLayer } ></motion.b>
          <motion.b variants={ mcMiddle.closed } id={ styles.mcMiddle } className={ styles.buttonLayer } ></motion.b>
          <motion.b variants={ mcBottom.closed } id={ styles.mcBottom } className={ styles.buttonLayer } ></motion.b>
        </motion.div> }
      </AnimatePresence>

      <AnimatePresence> 
      {/* menu Button switch to X or OPEN */}
        {menuState.menu && <motion.div 
          initial="start" 
          animate="animate"
          exit="exit"
          variants={ mcButton }
          className={ styles.mcButton } 
          onClick={ menuState.cycleMenu }>
          <motion.b variants={ mcTop.opened } id={ styles.mcTop } className={ styles.buttonLayer } ></motion.b>
          <motion.b variants={ mcMiddle.opened } id={ styles.mcMiddle } className={ styles.buttonLayer } ></motion.b>
          <motion.b variants={ mcBottom.opened } id={ styles.mcBottom } className={ styles.buttonLayer } ></motion.b>
        </motion.div> }
      </AnimatePresence> 
    </>

  );

}
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { serviceStyles } from "../utils/helpers/createStyles";
// import image from '../public/mock-service.jpeg';
import { serviceVariants } from "../utils/data/motion-objects";

export default function ServiceItem(props){ 
  const { styles, id, title, description, imagePath, listCount, position, screenWidth } = props
  const [showInfo, cycleInfo] = useCycle(false, true);
  // const style = serviceStyles(position, listCount, screenWidth);
  const image = require(`../public/${ imagePath }`)

  return (
    <>
      <AnimatePresence>
        { !showInfo && <motion.article 
          className={ styles.serviceItem } s
          // style={ style } 
          initial="enter"
          animate="animate"
          exit='exit'
          onClick={ () => cycleInfo() }
          >
          <div className={styles.serviceCard}>
            < Image 
              src={ image }
              width="200px"
              height="200px"
              layout="intrinsic"
              objectFit="contain"
              />
            {/* <img src='../public/mock-service.jpeg' alt="mock-service" /> */}
          <h3>{ title }</h3>
          </div>
        </motion.article> }

        { showInfo && <motion.article 
          className={ styles.serviceItem } 
          // style={ style } 
          initial="enter"
          animate="animate"
          exit='exit'
          variants = { serviceVariants.showInfo }
          layout='size'
          onClick={ () => cycleInfo() }
          >
          <div className={ styles.serviceInfoBackground }>
            <div className={ styles.serviceInfo }>
              <div className={ styles.serviceCard }>
                  < Image 
                    src={ image }
                    width="200px"
                    height="150px"
                    layout="intrinsic"
                    objectFit="scale-down"
                    />
                <h3>{ title }</h3>
              </div>
              <p>{ description }</p>
              <a  className={`${styles.btn} ${styles.btnMd}`}><span>Make An Appointment</span></a>
            </div>
          </div>
        </motion.article> }

      </AnimatePresence>
    </>
  );
}
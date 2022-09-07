import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { serviceStyles } from "../helpers/createStyles";
import image from '../../public/mock-service.jpeg';
import { serviceVariants } from "../data/motion-objects";

export default function ServiceItem(props){ 
  const { styles, title, imagePath, description, listCount, position, screenWidth } = props
  const [showInfo, cycleInfo] = useCycle(false, true);
  const style = serviceStyles(position, listCount, screenWidth);

  return (
    <>
      <AnimatePresence>
        { !showInfo && <motion.article 
          className={ styles.serviceItem } s
          style={ style } 
          initial="enter"
          animate="animate"
          exit='exit'
          onClick={ () => cycleInfo() }
          >
          <div className={styles.serviceCard}>
            < Image 
              src={ image }
              // width="75px"
              // height="75px"
              layout="intrinsic"
              objectFit="fill"
              />
          <h3>{ title }</h3>
          </div>
        </motion.article> }

        { showInfo && <motion.article 
          className={ styles.serviceItem } 
          style={ style } 
          initial="enter"
          animate="animate"
          exit='exit'
          variants = { serviceVariants.showInfo }
          layout='size'
          onClick={ () => cycleInfo() }
          >
          <div className={ styles.serviceInfoBackground }>
            <div className={ styles.serviceInfo }>
              <div className={ style.serviceCard }>
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
              <button>Make An Appointment</button>
            </div>
          </div>
        </motion.article> }

      </AnimatePresence>
    </>
  );
}
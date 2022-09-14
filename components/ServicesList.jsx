import { useRef, useEffect, useState } from "react";
import { mockServiceData } from "../utils/data/mock-services";
import Image from "next/image";
import ServiceItem from "./ServiceItem";
import servicesImage from "../public/bannerImage.jpeg";
import { serviceListLength } from "../utils/helpers/createStyles";

export default function ServicesList({ styles, screenWidth }){

  const serviceList = useRef(null)
  let [listCount, setListCount] = useState(1);
  useEffect(() => {
    setListCount(serviceList.current.childElementCount);
  }, [])

  const style = serviceListLength(listCount, screenWidth);

  const parsedServiceData = [];

  for (let i = 0; i < mockServiceData.length; i++) {
    parsedServiceData.push(< ServiceItem 
      key={ mockServiceData[i].id }
      position={ i }
      styles={ styles }
      title={ mockServiceData[i].title }
      imagePath={ mockServiceData[i].imagePath }
      description={ mockServiceData[i].description }
      listCount={ listCount }
      screenWidth = { screenWidth }
    />)
  }

  return (
    <section className={ styles.listContainer }>
      <div className={ styles.imageContainer} >
        <h2>Our Services</h2>
        < Image src={ servicesImage } layout="responsive"/>
      </div>
      <div ref={ serviceList } className={ styles.serviceList } style ={ style }>
        { parsedServiceData }
      </div>
    </section>
  );
}
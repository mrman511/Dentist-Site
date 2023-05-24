import { useState, useEffect } from "react";

import Image from "next/image";
import deleteService from "../../../utils/admin/deleteService";

export default function ServiceItem({ styles, service, index, setServices, cookie }){
  const [image, setImage] = useState(undefined); 
  // const image = require((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000') + service.featured_image);
  // console.log('SERVICE ITEM: ', service)

  async function getImage(){
    const serviceImage = await fetch((process.env.NEXT_PUBLIC_BACKEND_PATH || 'http://127.0.0.1:8000') + `/api/service/${service.id}/image/`)
    setImage(serviceImage.body);
  }

  useEffect(()=>{
    // if (!image){
    //   getImage()
    // }
  });


  return (
    <div className={ [styles.listItem, index% 2 === 1 ? styles.odd : ''].join(' ') }>
      <div className={ styles.imageContainer }>
        {/* <Image layout="responsive" objectFit="fill" src={ image }/> */}
        <img src={ `http://127.0.0.1:8000${service.featured_image}` } alt="" />
      </div>
      <h4>{ service.title }</h4>
      <p>{ service.description.slice(0, 30) + '...' }</p>

      <div className={ styles.buttons }>
        <button className={[ styles.btn, styles.btnSm ].join(' ')}>EDIT</button>
        <button className={[ styles.btn, styles.btnSm ].join(' ')} onClick={()=>{ deleteService(service.id, cookie, setServices) }}>DELETE</button>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";

import Services from "./components/Services";
import Status from "../Status";

import getServices from "../../utils/admin/getServices";

export default function AdminPage({styles, cookie}){
  const [ services, setServices ] = useState();

  useEffect(() => {
    if (!services){
      getServices(setServices)
    }
  }, [services])

  return (
    <section className={ styles.adminPage }>
      { !services &&  <Status />}
      { services && <Services styles={ styles } services={ services } setServices={ setServices } cookie={ cookie }/> }
    </section>
  );
}
import { useState, useEffect } from "react";

import Services from "./components/Services";
import Team from "./components/Team";
import Status from "../Status";

import getServices from "../../utils/admin/getServices";
import getTeam from "../../utils/admin/getTeam";

export default function AdminPage({styles, cookie}){
  const [ services, setServices ] = useState();
  const [ team, setTeam ] = useState();

  useEffect(() => {
    if (!services){
      getServices(setServices)
    }
    if (!team){
      getTeam(setTeam)
    }
  }, [services])

  return (
    <section className={ styles.adminPage }>
      { !team && <Status /> }
      { team && <Team styles={ styles } team={ team } setTeam={ Team } cookie={ cookie } /> }
      { !services &&  <Status />}
      { services && <Services styles={ styles } services={ services } setServices={ setServices } cookie={ cookie }/> }
    </section>
  );
}
import ServiceItem from "./ServiceItem";
import ServiceForm from "./ServiceForm";

export default function Services({ styles, services, setServices, cookie }) {
  const parsedServices = services.map( (service, i) => <ServiceItem 
    key={`serviceItem${i}`} 
    styles={ styles } 
    index={ i } 
    service={ service }
    setServices={ setServices }
    cookie={ cookie }
    /> 
  )

  return(
    <article className={ styles.listBlock }>
      <div className={ styles.listHeader }>
        <h2>Services: </h2>
        <button className={ [styles.btn, styles.btnMd].join(' ') } >Add New Service</button>
      </div>
      <ServiceForm styles={ styles } cookie={ cookie } setServices={ setServices }/>
      <div className={ styles.list }>
        { parsedServices }
      </div>
    </article>
  );
}
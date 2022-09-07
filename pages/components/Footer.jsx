import Map from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookMessenger,  faInstagram, faYoutube,  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props){

  const { styles } = props;
  const icons = [faFacebook, faFacebookMessenger, faInstagram, faYoutube ];

  const parsedicons = icons.map(icon => {
    return (
      <li key={ icons.lastIndexOf(icon) + 1 }>
        <a href="">
          < FontAwesomeIcon icon={icon} className={ styles.icon } />
        </a>
      </li>
    );
  });

  return (
    <footer className={ styles.footer }>
      <ul>
        { parsedicons }
      </ul>
      <div  className={ styles.mapContainer }>
        <Map styles={ styles }  />
      </div>

      <article>
        <h4>Dr. Ingrid Thie</h4>
        <address>
          <p>390 Commisioners Rd W,</p>
          <p>London, Ontario</p>
        </address>
        <p><strong>(519) 472-7090</strong></p>
      </article>
    </footer>
  );
}
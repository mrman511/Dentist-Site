export default function WideScreenMenu ({ styles }){

  return (
    <div className={ `${ styles.wideMenu } ${styles.menu}` }>
        <ul>
          <a href=""><li>About Us</li></a>
          <a href=""><li>Dental Services</li></a>
          <a href=""><li>Our Team</li></a>
          <a href=""><li>Patient Resources</li></a>
          <a href=""><li>Contact us</li></a>
        </ul>
      </div>
  );
};
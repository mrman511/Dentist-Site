import WideScreenMenu from "./WideScreenMenu";

export default function Navbar({ styles }) {


  return (
    <nav className={ styles.navbar }>
      <div className={ styles.titleContainer} >
        <h1 className='title' >Dr. Ingrid Thie</h1>
        <h3 className="sub-title">Family Dentistry</h3>
      </div>
      <WideScreenMenu styles={styles} />
    </nav>
  );
}

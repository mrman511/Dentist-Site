import Image from "next/image"
import loremDescription from "../data/loremDescription";

export default function Banner({ styles }){

  return (
    <section className={ styles.hero }>
      <div className={ styles.banner }>
        <h2>Who We Are</h2>
        <Image 
          src="/dentalOffice.jpg" 
          layout="fill"
          className={ styles.image }
          />
      </div>
      <div className={ styles.about }>
        <div>
          <h3><strong>Dr. Ingrid Thie</strong></h3>
          <h3>Family Desnisty</h3>
        </div>
        <p>{ loremDescription }</p>
      </div>
    </section>
  );
}
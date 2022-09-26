import Image from "next/image"
import loremDescription from "../utils/data/loremDescription";

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
        <p>Our Terrific team at Dr. Ingrid Thie Family Dentistry Office combines education,
           experience, and a gently touch to provide our patients with exceptional dental care.
           We truly care about our patients, placing their comfort and satisfaction above all else.
           Dr. Ingrid Thie along with our highly trained team take the time to personalize your
           dental experience, removing the fear and intimidation from your dental visit.
        </p>
        <p>
          <strong>
          Our goal is to provide you with the most pleasant dental experience possible.
           We pride ourselves on striving for pain-free dentistry and easing the concerns of
           even the most anxious patients.
          </strong>
        </p>
      </div>
    </section>
  );
}
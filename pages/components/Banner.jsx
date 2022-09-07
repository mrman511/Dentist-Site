import Image from "next/image"

export default function Banner({ styles }){

  return (
    <section className={ styles.banner }>
      <Image 
        src="/bannerImage.jpeg" 
        height="400px" 
        width="600px" 
        />
    </section>
  );
}
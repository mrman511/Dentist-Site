import Image from "next/image";
import ProfileImage from '../public/mock-profile.jpeg';
import OwnerImage from '../public/owner.jpeg';

export default function TeamItem(props) {
  const { styles, imagePath } = props;
  let img;

  if (imagePath === "owner.jpeg"){
    img = OwnerImage
  } else {
    img = ProfileImage;
  }

  return (
    <div className={ styles.teamItem }>
      < Image 
      src={ ProfileImage } 
      layout="intrinsic"
      objectFit="fill"/>
    </div>
  );
}
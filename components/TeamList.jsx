import Image from "next/image";

import TeamItem from "./TeamItem";
import teamImage from '../public/team.jpg';

import { mockTeamData } from '../utils/data/mock-team';

export default function TeamList(props) {

  const { styles } = props;

  const parsedTeamData = mockTeamData.map(data => < TeamItem 
    key={ data.id }
    name={ data.name }
    description={ data.description }
    position={ data.position }
    imagePath={ data.imagePath }
    styles = { styles }
    />);

  return (
    <section className={styles.listContainer}>
      <div className={ styles.imageContainer} >
        <h2>Our Team</h2>
        < Image src={ teamImage } layout="responsive"/>
      </div>
      <div className={ styles.teamList }>
        { parsedTeamData }
      </div>
    </section>
  );
}
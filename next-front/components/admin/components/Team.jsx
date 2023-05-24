import TeamItem from "./TeamItem";

export default function Team({ styles, team }){
  const parsedTeam = team.map((person, i) => <TeamItem key={ `teamMember${i}` } styles={styles} person={ person } index={ i }/>)

  return (
    <article className={ styles.listBlock }>
      <div className={ styles.listHeader }>
        <h2>Team: </h2>
      </div>
      {/* <ServiceForm styles={ styles } cookie={ cookie } setServices={ setServices }/> */}
      <div className={ styles.list }>
        { parsedTeam }
      </div>
    </article>
  );
}
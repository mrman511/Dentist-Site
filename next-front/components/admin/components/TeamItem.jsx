export default function TeamItem({ styles, person, index }){

  return (
    <div className={ [styles.listItem, index% 2 === 1 ? styles.odd : ''].join(' ') }>
      <div className={ styles.imageContainer }>
        {/* <Image layout="responsive" objectFit="fill" src={ image }/> */}
        <img src={ `http://127.0.0.1:8000${person.profile_image}` } alt="" />
      </div>
      <h4>{ person.name }</h4>
      <p>{ person.email }</p>

      <div className={ styles.buttons }>
        <button className={[ styles.btn, styles.btnSm ].join(' ')}>EDIT</button>
      </div>
    </div>
  );
}
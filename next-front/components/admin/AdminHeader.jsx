import Image from "next/image";
import transparentLogo from '../../public/logo-transparent.png'

export default function AdminHeader({styles, user, logout}){



  return (
    <header className={ styles.header }>
      <section className={ styles.info }>
        <div className={ styles.logoContainer}>
          <Image layout="responsive" objectFit="contain" src={ transparentLogo }/>
        </div>
        <div className={ styles.message }>
          { !user && 
            <h2>Please Login </h2>
          }
          { user &&
            <h2>{ user.last_name }, { user.first_name }</h2>
          }
        </div>
      </section>

      { user && 
        <button className={ [styles.btn, styles.btnMd].join(' ') } onClick={ () => { logout() } }>
          Log Out
        </button> 
      }
    </header>
  );
}
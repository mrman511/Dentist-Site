import Head from "next/head";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie"; 
import { useState, useEffect, useContext } from "react";

import LoginForm from "../components/admin/LoginForm";
import AdminPage from "../components/admin/AdminPage";
import AdminHeader from "../components/admin/AdminHeader";
import Status from '../components/Status'

import styles from '../styles/Admin.module.scss';

import attemptLogin from "../utils/admin/attemptLogin";
import getUserData from "../utils/admin/getUserData";
import getServices from "../utils/admin/getServices";
import useVisualMode from "../utils/helpers/useVisualMode";


export default function Admin(){
  const router = useRouter();
  const { mode, transition } = useVisualMode('LOGIN');
  const [cookie, setCookie, removeCookie] = useCookies(['user']);
  const [userData, setUserData] = useState(undefined);

  function logout() {
    removeCookie(["user"], { path: '/admin' });
  }

  function login(e) {
    e.preventDefault();
    transition("STATUS")
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    attemptLogin(user, setCookie)
  }

  useEffect(() => {
    if(!cookie.user && mode === "SHOW"){
      transition('LOGIN');
    }

    if (cookie.user && !userData){
      getUserData(cookie, setUserData, transition)
    } else if (!cookie.user && userData){
      setUserData(undefined)
    }
    
  }, [cookie])

  return (
    <main className={ styles.main }>
      <Head>
        <title>Dr. Ingrid Thie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminHeader styles={ styles } user={ userData } logout={ logout }/>
      { mode === 'LOGIN' && <LoginForm styles={ styles } login={ login } />}
      { mode === 'STATUS' && <Status/> }
      { mode === 'SHOW' && <AdminPage styles={ styles } cookie={ cookie }/> }
    </main>
  );
}
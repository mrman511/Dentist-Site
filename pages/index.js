import { useCycle } from 'framer-motion';

import Head from 'next/head';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import McButton from '../components/McButton';
import Menu from '../components/Menu';
import WideScreenMenu from '../components/WideScreenMenu';
import Banner from '../components/Banner';
import ServicesList from '../components/ServicesList';
import TeamList from '../components/TeamList';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';

export default function Home() {
  const [ menu, cycleMenu ]  = useCycle(false, true);
  // const {innerWidth: startScreenWidth} = window;
  const [screenWidth, setScreenWidth] = useState(320);
  const [wideScreen, setWideScreen] = useState(true);

  console.log('WideScreen: ', wideScreen)
  
  // const checkWidth = () => {
  //     const { innerWidth: currentWidth } = window;
  //     if (currentWidth !== screenWidth){
  //       setScreenWidth(currentWidth);
  //     }
  //     setCheckWidth()
  // }
      
  // const setCheckWidth = () => {
  //   setTimeout(() => {
  //     console.log("Current screen width: ", screenWidth);
  //     console.log("Checking Screen Width...");
  //     checkWidth();
  //   }, 3000)
  // }
        
  useEffect(() => {
    let currentWidth = window.innerWidth;
    setScreenWidth(currentWidth);
  }, [screenWidth])

  return (
    <div className={styles.container}>
      <Head>
        <title>Dr. Ingrid Thie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar styles={ styles } />
      <McButton styles={styles} menuState = {{ menu: menu, cycleMenu: cycleMenu }}/>
      <Menu styles={ styles }  menuState = {{ menu: menu, cycleMenu: cycleMenu }} /> 
      <Banner styles={ styles } />
      <TeamList styles={ styles } />
      <ServicesList styles={ styles } screenWidth={ screenWidth }/>
      <AppointmentForm styles={ styles }/>
      <Footer styles={ styles } />
    </div>
  )
}

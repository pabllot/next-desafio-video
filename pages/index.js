import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Video } from '../components/Video/Video'
import  React from 'react'
import {useState} from 'react'
import { vids } from '../components/Database/Data'

export default function Home() {
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [chosenVideo, setChosenVideo] = useState(vids[0].url);
  const [theme, setTheme] = useState(false)

  return (
    <>
      <Head>
        <title>Video Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${ theme ? styles.light : ''}`}>
         <Video isTheaterMode={isTheaterMode} setIsTheaterMode={setIsTheaterMode} chosenVideo={chosenVideo} setChosenVideo={setChosenVideo} theme={theme}/>
         {!isTheaterMode && <Sidebar setChosenVideo={setChosenVideo}  theme={theme} setTheme={setTheme} /> }
      </main>
    </>
  )
}

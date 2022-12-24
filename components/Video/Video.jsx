import { useState, useRef, useEffect } from 'react'
import { Container } from './styles';

import { IoMdPlay, IoMdPause } from 'react-icons/io'
import { MdVolumeOff } from 'react-icons/md'
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi'
import { CgScreenWide, CgScreen } from 'react-icons/cg'
import { GoUnmute } from 'react-icons/go'

export const Video = ({isTheaterMode, setIsTheaterMode, chosenVideo}) => {
  const [isVideoPaused, setIsVideoPaused] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [isMute, setIsMute] = useState(true)
  const [duration, setDuration] = useState(null)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [speed, setSpeed] = useState(1)
  const vidRef = useRef(null)
  const fullScreenRef = useRef(null)
  const volumeRef = useRef(null)
   
  // modo teatro
  const toggleTheaterMode = () =>  setIsTheaterMode(prev => !prev);

  //dar play no vídeo
  const togglePlay = () => {
    isVideoPaused ? vidRef.current.play() : vidRef.current.pause();
    setIsVideoPaused(prev => !prev)
    }

  //mutar vídeo
  const toggleMute = () => {
    setIsMute(prev => !prev)
    isMute ? vidRef.current.volume = 0 : vidRef.current.volume = 1;
    isMute ? volumeRef.current.value = 0 : volumeRef.current.value = 1
    }

  // tela cheia
  const toggleFullScreen = () => {
    setIsFullScreen(prev => !prev)    
    if (!isFullScreen)document.exitFullscreen()
    else fullScreenRef.current.requestFullscreen()
    }

  // ao trocar de vídeo quando o video ta rodando, seta o botão p play
  useEffect(() => {
    setIsVideoPaused(true)
  },[chosenVideo])


  // ajustar volume de acordo com a barrinha
  const  handleRange= (e)=>{
    if(e.target.value < 0.01) vidRef.current.volume = 0, setIsMute(false);
    else if(e.target.value > 0.01 && e.target.value < 0.3) vidRef.current.volume = 0.2, setIsMute(true)
    else if(e.target.value > 0.3 && e.target.value < 0.7) vidRef.current.volume = 0.6, setIsMute(true)
    else vidRef.current.volume = 1
    }


  // Se os segundos começarem com zero exemplo 01:03. Isso ajeita, senao fica 01:3.
  const startWithZero = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
    })
    

  // formatando a duração de vídeo, pq recebe milisegundos e nao em formato de hora 
  const formatDuration = (time) => {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
      return `${minutes}:${startWithZero.format(seconds)}`
      } else {
        return `${hours}:${startWithZero.format(minutes)}:${startWithZero.format(seconds)}`
      }
   }

   //mudar velocidade do video
  const changeSpeed = () => {
    let newSpeed = vidRef.current.playbackRate + 0.25
    if (newSpeed > 2) newSpeed = 0.25
    vidRef.current.playbackRate = newSpeed
    setSpeed(newSpeed)
    }

   // para mostrar a barrinha carregando conforme o tempo passa  
  const width = 100 / parseInt(duration?.replace(':', '')) * parseInt(currentTime?.replace(':', ''))

  return (
    <Container>
      <div ref={fullScreenRef} className={`video-container paused  ${isTheaterMode ? "theater" : ""}`}>
        <div className='progress' style={{width: `${width}%`}}></div>
        <div className='video-controls-container'>
          <div className="timeline-container"></div>
          <div className="controls">
            <button onClick={togglePlay}>{!isVideoPaused ? <IoMdPause /> : <IoMdPlay />}</button>

            <div className='volume-container'>
              <button onClick={toggleMute}>{isMute ? <GoUnmute /> : <MdVolumeOff />}</button>
              <input ref={volumeRef} onInput={(e) => handleRange(e)} className='volume-slider' type='range' min='0' max='1' step='any' defaultValue='1'></input>
            </div>

            <div className='duration-container'>
              <div className='current-time'>{currentTime}</div>/
              <div className='total-time'>{duration}</div>
            </div>

            <button onClick={changeSpeed} className='speed-btn wider-btn'>{speed}x</button>
            <button onClick={toggleTheaterMode}>{isTheaterMode ? <CgScreenWide/> : <CgScreen />}</button>
            <button onClick={toggleFullScreen}>{ isFullScreen ? <BiFullscreen /> : <BiExitFullscreen/>}</button>
          </div>
        </div>
        <video ref={vidRef} onTimeUpdate={()=>setCurrentTime(formatDuration(vidRef?.current?.currentTime))} onLoadedMetadata={()=>setDuration(formatDuration(vidRef?.current?.duration))} 
        src={chosenVideo} loop type='video/mp4'></video>
      </div>
    </Container>
  )
}


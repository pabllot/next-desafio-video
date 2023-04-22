import {
  Button,
  Container,
  Controls,
  DurationContainer,
  Progress,
  SpeedButton,
  Timeline,
  VideoContainer,
  VideoControlsContainer,
  VolumeContainer,
  VolumeSlider,
} from "./styles";
import { useState, useRef, useCallback, useEffect } from "react";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { MdVolumeOff } from "react-icons/md";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { CgScreenWide, CgScreen } from "react-icons/cg";
import { GoUnmute } from "react-icons/go";

export const Video = ({ isTheaterMode, setIsTheaterMode, chosenVideo, speed, setSpeed }) => {
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [isMute, setIsMute] = useState(false);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState("0:00");
  const vidRef = useRef(null);
  const fullScreenRef = useRef(null);
  const volumeRef = useRef(null);

  // modo teatro
  const toggleTheaterMode = () => setIsTheaterMode((prev) => !prev);

  //dar play no vídeo - usando useRef p acessar a DOM com o built-in methods de video play/pause
  const togglePlay = useCallback(() => {
    isVideoPaused ? vidRef.current.play() : vidRef.current.pause();
    setIsVideoPaused((prev) => !prev);
  }, [isVideoPaused, setIsVideoPaused, vidRef]);

  //mutar vídeo
  const toggleMute = useCallback(() => {
    setIsMute((prev) => !prev);
    !isMute ? (vidRef.current.volume = 0) : (vidRef.current.volume = 1);
    !isMute ? (volumeRef.current.value = 0) : (volumeRef.current.value = 1);
  }, [isMute, setIsMute, vidRef, volumeRef]);

  // ajustar volume de acordo com a barrinha
  const handleRange = (e) => {
    if (e.target.value < 0.01) (vidRef.current.volume = 0), setIsMute(true);
    else if (e.target.value > 0.01 && e.target.value < 0.3) (vidRef.current.volume = 0.1), setIsMute(false);
    else if (e.target.value > 0.3 && e.target.value < 0.7) (vidRef.current.volume = 0.5), setIsMute(false);
    else vidRef.current.volume = 1;
  };

  // tela cheia
  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
    if (!isFullScreen) document.exitFullscreen();
    else fullScreenRef.current.requestFullscreen();
  };

  // Se os segundos começarem com zero exemplo 01:03. Isso ajeita, senao fica 1:3.
  const startWithZero = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  // formatando a duração de vídeo, pq recebe milisegundos e nao em formato de hora
  const formatDuration = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
      return `${minutes}:${startWithZero.format(seconds)}`;
    } else {
      return `${hours}:${startWithZero.format(minutes)}:${startWithZero.format(seconds)}`;
    }
  };

  const changeSpeed = useCallback(() => {
    let newSpeed = vidRef.current.playbackRate + 0.25;
    if (newSpeed > 2) newSpeed = 0.25;
    vidRef.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  }, [vidRef, setSpeed]);

  // para mostrar a barrinha carregando conforme o tempo passa
  const progressWidth = (100 / parseInt(duration?.replace(":", ""))) * parseInt(currentTime?.replace(":", ""));

  // ir para o momento do vídeo clicado
  const getNewCurrentTime = useCallback(
    (e) => {
      if (!vidRef.current) return;
      //pegar informações do mouse no momento do clique com esse método
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const clickPos = (e.clientX - left) / width;
      if (clickPos < 0 || clickPos > 1) return;

      const durationMs = vidRef.current.duration * 1000;

      const newProgressMs = durationMs * clickPos;
      const newTimeSec = newProgressMs / 1000;
      vidRef.current.currentTime = newTimeSec;
    },
    [vidRef.current.currentTime]
  );
  useEffect(() => {
    console.log(progressWidth);
  }, [getNewCurrentTime]);
  return (
    <Container>
      <VideoContainer isTheaterMode={isTheaterMode} ref={fullScreenRef}>
        <Timeline onClick={getNewCurrentTime} className="progressinho" />
        <Progress isVideoPaused={isVideoPaused} style={{ width: `${progressWidth}%` }} />
        <VideoControlsContainer isVideoPaused={isVideoPaused}>
          <Controls>
            <Button onClick={togglePlay}>{!isVideoPaused ? <IoMdPause /> : <IoMdPlay />}</Button>
            <VolumeContainer>
              <Button onClick={toggleMute}>{!isMute ? <GoUnmute /> : <MdVolumeOff />}</Button>
              <VolumeSlider
                ref={volumeRef}
                onInput={(e) => handleRange(e)}
                className="volume-slider"
                type="range"
                min="0"
                max="1"
                step="any"
                defaultValue="1"
              />
            </VolumeContainer>

            <DurationContainer>
              <div>{currentTime}</div>/<div>{duration ? duration : "2:43"}</div>
            </DurationContainer>

            <SpeedButton onClick={changeSpeed}>{speed}x</SpeedButton>
            <Button onClick={toggleTheaterMode}>{isTheaterMode ? <CgScreenWide /> : <CgScreen />}</Button>
            <Button onClick={toggleFullScreen}>{isFullScreen ? <BiFullscreen /> : <BiExitFullscreen />}</Button>
          </Controls>
        </VideoControlsContainer>
        <video
          ref={vidRef}
          onTimeUpdate={() => setCurrentTime(formatDuration(vidRef?.current?.currentTime))}
          onLoadedMetadata={() => setDuration(formatDuration(vidRef?.current?.duration))}
          src={chosenVideo}
          type="video/mp4"
          loop
          autoPlay={isVideoPaused ? false : true}
        />
      </VideoContainer>
    </Container>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 650px;
  
  video { width: 100% }  

  @media (max-width: 1100px) { width: 1024px;height: 580px }  
  @media (max-width: 768px) { height: 30% }  
  @media (max-width: 620px) { height: 30% }  
  @media (max-width: 450px) { height: 30% }
`
export const VideoControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
  transition: opacity 150ms ease-in-out;
  background-color: rgba(38, 37, 37, 0.438);
  border-top: 4px solid rgb(198, 192, 192);
  opacity: ${(props) => (props.isVideoPaused ? '1' : '0')};
  
`

export const Progress = styled.div`
  height: 4px;
  background: red;
  position: absolute;
  z-index: 999;
  bottom: 38px;
  left: 0;
  opacity: ${(props) => (props.isVideoPaused ? '1' : '0')};
  transition: opacity 150ms ease-in-out;
`
export const VideoContainer = styled.div` 
  position: relative;
  display: flex;
  width: ${(props) => (props.isTheaterMode ? '100vw' : '900px')};
  height: ${(props) => (props.isTheaterMode ? '82vh' : '100%')};
  justify-content: center;
  margin-inline: auto;
  overflow: hidden;
  background-color: black;

  &:hover ${VideoControlsContainer}{
    opacity: 1;
  }

  &:hover ${Progress}{
    opacity: 1;
  }
  

  @media (max-width: 1100px) { width: 100%; height: 100% }

  @media (max-width: 768px) { 
    width: ${(props) => (props.isTheaterMode ? '100vw' : '50vw')};
    height: ${(props) => (props.isTheaterMode ? '82vh' : '100%')};
    border-bottom-left-radius: 0 
  }

  @media (max-width: 660px) { 
    width: 80vw;
    height: 100%; 
    border-bottom-left-radius: 0
   }
  
  @media (max-width: 420px) {
    height: ${(props) => (props.isTheaterMode ? '82vh' : '100%')};
    width: 100vw; 
    border-bottom-left-radius: 0 
  }
`

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover .volume-slider {
    width: 100px;
    transform: scaleX(1);
  }
`
export const Button = styled.button`
background: none;
border: none;
color: inherit;
padding: 0;
height: 30px;
width: 30px;
font-size: 1.1rem;
cursor: pointer;
opacity: .9;
transition: opacity 150ms ease-in-out;
outline: none;

&hover {
  opacity: 1;
}

`
export const SpeedButton = styled.button`
background: none;
border: none;
color: inherit;
padding: 0;
height: 30px;
width: 50px;
font-size: 1.1rem;
cursor: pointer;
opacity: .9;
transition: opacity 150ms ease-in-out;
outline: none;
margin-right: 10px;
font-weight: 500;

&hover {
  opacity: 1;
}


`
export const Controls = styled.div`
  display: flex;
  gap: .5rem;
  padding: .25rem;
  align-items: center;

  svg {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  height: 30px;
  width: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: .9;
  transition: opacity 150ms ease-in-out;
  outline: none;

  &:hover {
    opacity: 1;
  }
  }
`

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  flex-grow: 1;
`

export const VolumeSlider = styled.input`
  width: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: width 150ms ease-in-out, tranform 150ms ease-in-out;
  margin-left: 1rem;
`



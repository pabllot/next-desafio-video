import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 750px;
  width: 100%;
  max-width: 1000px;

  video {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  @media (max-width: 1523px) {
    max-width: 900px;
    height: 650px;
  }
  @media (max-width: 1366px) {
    max-width: 700px;
    height: 600px;
  }
  @media (max-width: 992px) {
    max-width: 100%;
    height: 700px;
  }
  /* 
  @media (max-width: 992px) { height: 30% }  
  @media (max-width: 620px) { height: 30% }  
  @media (max-width: 450px) { height: 30% } */
`;

export const VideoControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  z-index: 100;
  transition: opacity 150ms ease-in-out;
  background-color: rgba(38, 37, 37, 0.89);
  border-top: 4px solid rgb(215, 202, 202);
  opacity: ${(props) => (props.isVideoPaused ? "1" : "0")};
  padding: 4px 7px;
  @media (max-width: 992px) { display:none }  

`;

export const Timeline = styled.div`
  height: 7px;
  background: transparent;
  position: absolute;
  z-index: 999;
  width: 100%;
  bottom: 38px;
  left: 0;
  cursor: pointer;
`;

export const Progress = styled.div`
  height: 4px;
  background: #586ca5;
  position: absolute;
  z-index: 998;
  bottom: 46px;
  left: 0;
  opacity: ${(props) => (props.isVideoPaused ? "1" : "0")};
  transition: opacity 150ms ease-in-out;
`;
export const VideoContainer = styled.div`
  position: relative;
  display: flex;
  width: ${(props) => (props.isTheaterMode ? "100vw" : "100%")};
  height: ${(props) => (props.isTheaterMode ? "82vh" : "100%")};
  justify-content: center;
  margin-inline: auto;
  overflow: hidden;
  background-color: black;

  &:hover ${VideoControlsContainer} {
    opacity: 1;
  }

  &:hover ${Progress} {
    opacity: 1;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 992px) {
    width: 100%;
    height: ${(props) => (props.isTheaterMode ? "82vh" : "100%")};
    border-radius: 0px;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover .volume-slider {
    width: 75px;
    transform: scaleX(1);
  }

  @media (max-width: 992px) {
    .volume-slider {
      width: 60px;
      transform: scaleX(1);
    }
  }
  @media (max-width: 500px) {
    .volume-slider {
      width: 42px;
      transform: scaleX(1);
    }
  }
`;
export const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  height: 30px;
  width: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 150ms ease-in-out;
  outline: none;

  &hover {
    opacity: 1;
  }
`;
export const SpeedButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  height: 30px;
  width: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 150ms ease-in-out;
  outline: none;
  margin-right: 10px;
  font-weight: 500;

  &hover {
    opacity: 1;
  }
`;
export const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
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
    opacity: 0.9;
    transition: opacity 150ms ease-in-out;
    outline: none;

    &:hover {
      opacity: 1;
    }
  }
`;

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-grow: 1;
`;

export const VolumeSlider = styled.input`
  width: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: width 150ms ease-in-out, tranform 150ms ease-in-out;
  margin-left: 0.5rem;
  appearance: none;
  height: 4.5px;
  background-color: #d5d0d0;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    display: block;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: white;
    outline: none;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    display: block;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: white;
    outline: none;
    cursor: pointer;
  }
`;

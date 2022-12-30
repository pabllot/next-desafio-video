import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 650px;
  
  .video-container {
    position: relative;
    display: flex;
    width: 900px;
    height: 100%;
    justify-content: center;
    margin-inline: auto;
    overflow: hidden;
    background-color: black;
  }
  
  
  .video-container.theater {
    height: 82vh;
    width: 100vw;
  }

video {
  width: 100%;
}

.video-controls-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  background-color: rgba(38, 37, 37, 0.438);
  border-top: 4px solid rgb(198, 192, 192);
}

.video-container:hover .video-controls-container,
.video-container.paused .video-controls-container{
  opacity: 1;
}

.video-container:hover .progress {
  opacity: 1;
}

.progress {
  height: 4px;
  background: red;
  position: absolute;
  z-index: 999;
  bottom: 38px;
  left: 0;
  opacity: 1;
  transition: opacity 150ms ease-in-out;

}
.notShowing{
  opacity: 0;
}

.video-controls-container .controls {
  display: flex;
  gap: .5rem;
  padding: .25rem;
  align-items: center;
}

.video-controls-container .controls button,
.video-controls-container .controls svg {
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
}

.video-controls-container .controls button:hover,
.video-controls-container .controls svg:hover {
  opacity: 1;
}



.volume-container {
  display: flex;
  align-items: center;
}

.volume-slider {
  width: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: width 150ms ease-in-out, tranform 150ms ease-in-out;
  margin-left: 1rem;
}

.volume-container:hover .volume-slider{
  width: 100px;
  transform: scaleX(1);
}

.duration-container {
  display: flex;
  align-items: center;
  gap: .25rem;
  flex-grow: 1;
}

.wider-btn {
  width: 50px;
  margin-right: 10px;
  font-weight: 500;
}



  
  .light{    
    background-color: white;
    opacity: 0.9;
  }
  
  @media (max-width: 1100px) {
    width: 1024px;
    height: 580px;
    .video-container {
      width: 100%;
      height: 100%;
    }
  }
  
  @media (max-width: 768px) {
    height: 30%;
    
    .video-container {
      width: 70vw;    
      height: 100%;
      border-bottom-left-radius: 0;      
    }    
  }
  
  @media (max-width: 620px) {
    height: 30%;
    .video-container {
      width: 80vw;
      height: 100%;
      border-bottom-left-radius: 0;
    }   
  }
  
  @media (max-width: 450px) {
    height: 30%;
    .video-container {
      height: 100%;
      width: 100vw;    
      border-bottom-left-radius: 0;
    }
  }


`
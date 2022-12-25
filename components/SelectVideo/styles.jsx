import styled from "styled-components";

export const Container = styled.div`
width: 340px;
height: 108px;
display: flex;
align-items: center;
justify-content: space-evenly;
cursor: pointer;


&:hover {
    background-color: #a2a0a039;
    
}

.left {
    width: 140px;
    height: 80px;
    border-radius: 4px;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 145px;
    height: 80px;
}

h3 {
    color: #ffffffd6;
    font-size: 15px;
    margin: 0;   
}

p {
    color: #ffffffd6;
    font-size: 11px;
    margin: 0;
}


.views {
    font-size: 8px;
}



.color {
    color: black;
}

@media (max-width: 1024px) {
  width: 320px;
  height: 94px;
  .left {
    width: 125px
  }
}

@media (max-width: 768px) {
  width: 100%;
  height: 18%;
  .left {
    height: 85%;
    width: 33%;
  }

  .right {
    height: 85%;
    width: 50%;
  } 

}

@media (max-width: 620px) {
    width: 90%;
    height: 18%;
  .left {
    height: 85%;
    width: 45%;
  }

  .right {
    height: 85%;
    width: 50%;
  }  

}

@media (max-width: 350px) {
    width: 90%;
    height: 18%;
  .left {
    width: 40%;
    height: 85%;
}

.right {
    width: 50%;
    height: 85%;
}
}





`
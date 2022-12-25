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
    justify-content: center;
    gap: 3.4px;
    width: 145px;
    height: 80px;
}

h3 {
    color: #ffffffd6;
    font-size: 13px;
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
  width: 420px;
  height: 80px;
  .left {
    height: 60px;
    width: 125px;
  }

  .right {
    height: 50px;
    width: 190px;
    gap: 0px;
  } 
  p {
    font-size: 10px
  }
  h3 {
    font-size: 12px;
  }
  
}

@media (max-width: 620px) {
  width: 350px;
  height: 80px;
  .left {
    height: 70px;
    width: 125px
  }

  .right {
    height: 70px;
    width: 145px;
  }
  p {
    font-size: 10px
  }
  h3 {
    font-size: 12px;
  }
  

}

@media (max-width: 350px) {
  width: 320px;
  height: 80px;
  .left {
    width: 145px;
    height: 70px;
}

.right {
    width: 145px;
    height: 70px;
}

h3 {
    font-size: 12px;

    
}

p {
    font-size: 10px;
}


}





`
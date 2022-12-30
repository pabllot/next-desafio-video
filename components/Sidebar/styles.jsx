import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
height: 650px;
width: 440px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
overflow: hidden;


.light {
  background-color: #ffffff;
}

.light button {
  color: #201f1fda;
  background-color: #a29b9b9b;
  
}


@media (max-width: 1100px) {
  width: 420px;
  height: 580px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

}

@media (max-width: 768px) {
  width: 70vw;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 70%;
}

@media (max-width: 620px) {
  width: 100vw;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 70%;
 
}

@media (max-width: 450px) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 70%;
}
`

export const Sidebarr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-inline: auto;    
  background: #000000e2;

  @media (max-width: 1100px){ height: 100%}
  @media (max-width: 768px) { width: 100vw;    height: 100%;}
  @media (max-width: 620px) { width: 80vw;     height: 100%;}
  @media (max-width: 450px) { width: 100vw;    height: 100%;}
  
  `

export const Filter = styled.div`
  height: 30px;
  width: 76%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1100px){width: 90%}
  @media (max-width: 768px) {width: 100%;   height: 8%}
  @media (max-width: 620px) {width: 100%;    height: 8%}
  @media (max-width: 450px) {width: 100%;    height: 8%}

`

export const Button = styled.button`
  background-color: #877d7dcc;
  border-radius: 5px;
  color: #ffececdf;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  outline-style: none;
  width: 50px;
  height: 20px;

  &:focus {
  background-color: #1d1a1a;
  color: white;
}

  &:active {
  background-color: #6a6969af;
  color: #ffffff;
}

   @media (max-width: 1100px) {  width: 39px; height: 20px; font-size: 13px;}
   @media (max-width: 768px) { font-size: 12.5px;  width: 80px;  height: 20px;}
   @media (max-width: 450px) {font-size: 14px;  width: 54px;  height: 20px;}

`
export const LargeButton = styled.button`
  background-color: #877d7dcc;
  border-radius: 5px;
  color: #ffececdf;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  outline-style: none;
  width: 70px;
  height: 20px;

  &:focus {
  background-color: #1d1a1a;
  color: white;
}

  &:active {
  background-color: #6a6969af;
  color: #ffffff;
}

   @media (max-width: 1100px) {  width: 60px; height: 20px; font-size: 12.5px;}
   @media (max-width: 768px) { font-size: 14px;  width: 60px;  height: 20px;}
   @media (max-width: 450px) {font-size: 13px;  width: 70px;  height: 20px;}

`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
  color: #f6d33a;
  }


  .light svg {
    color: #061869
  }


`




 // @media (max-width: 1100px) {}
 // @media (max-width: 768px) {}
 // @media (max-width: 620px) {}
//  @media (max-width: 450px) {}
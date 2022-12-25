import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
height: 500px;
width: 340px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
overflow: hidden;


.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;    
  background-color: #000000e2;
}

.filter {
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
}


button {
  background-color: white;
  border-radius: 50px;
  color: #000000df;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  outline-style: none;
  width: 60px;
  height: 20px;
}

.office {
  font-size: 13px;
  width: 70px;
}


.button:focus {
  background-color: #898181;
}

.button:active {
  background-color: #6a6969af;
  color: #ffffff;
}

.light {
  background-color: #e7e0e0;
}

.light button {
  border: 1px solid black;
  color: black;
  
}

svg {
  color: white;
}

.light svg {
  color: black
}

@media (max-width: 1024px) {
  width: 320px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
}

@media (max-width: 768px) {
  width: 420px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
}

@media (max-width: 620px) {
  width: 350px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
}

@media (max-width: 350px) {
  width: 300px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
}


`
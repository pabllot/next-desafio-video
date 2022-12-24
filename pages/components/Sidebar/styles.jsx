import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
height: 500px;
width: 340px;
background-color: #121212f4;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;


.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;    
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
  font-size: 14px;
  font-weight: 700;
  outline-style: none;
  width: 60px;
}


.button:focus {
  background-color: #090909cb;
  color: white;
  border: 2px solid white;
}

.button:active {
  background-color: #000000b1;
  color: #ffffff;
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
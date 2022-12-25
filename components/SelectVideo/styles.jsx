import styled from "styled-components";

export const Container = styled.div`
width: 340px;
height: 94px;
display: flex;
align-items: center;
justify-content: space-evenly;
cursor: pointer;


&:hover {
    background-color: #a2a0a039;
    
}

.left {
    width: 130px;
    height: 70px;
    border-radius: 8px;
}

.right {
    display: flex;
    flex-direction: column;
    gap: 3.4px;
    width: 145px;
    height: 70px;
}

h3 {
    color: #ffffffd6;
    font-size: 12px;
    margin: 0;

    
}

p {
    color: #ffffffd6;
    font-size: 10px;
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

}

@media (max-width: 768px) {
  width: 420px;

}

@media (max-width: 620px) {
  width: 350px;

}

@media (max-width: 350px) {
  width: 300px;

}





`
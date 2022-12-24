import styled from "styled-components";

export const Container = styled.div`
width: 310px;
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
    width: 145px;
    height: 70px;
    color: white;
}

h3 {
    font-size: 12px;
    margin: 0;
}

p {
    font-size: 9px;
    font-weight: 700;
    margin: 0;
}



`
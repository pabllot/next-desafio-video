import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-height: 650px;
  width: 360px;
  border-radius: 5px;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1100px) {
    max-height: 580px;
  }

  @media (max-width: 768px) {
    width: 50vw;
    border-radius: 0px;
    max-height: 70%;
  }

  @media (max-width: 660px) {
    width: 80vw;
    border-radius: 0px;
    max-height: 70%;
  }

  @media (max-width: 420px) {
    width: 100vw;
    border-radius: 0px;
    max-height: 70%;
  }
`;

export const Sidebarr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-height: 100%;
  margin-inline: auto;
  background: ${(props) => props.theme.colors.primary};

  @media (max-width: 1100px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
  @media (max-width: 620px) {
    width: 80vw;
    height: 100%;
  }
  @media (max-width: 450px) {
    width: 100vw;
    height: 100%;
  }
`;

export const Filter = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1100px) {
  }
  @media (max-width: 768px) {
    height: 8%;
    align-items: center;
  }
  @media (max-width: 620px) {
    height: 8%;
  }
  @media (max-width: 450px) {
    height: 8%;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.buttonText};
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 14px;
  font-weight: 700;
  outline-style: none;
  width: 60px;
  height: 25px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    box-sizing: border-box;
    background-color: rgba(250, 250, 255, 0.112);

    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: all 0.8s ease;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    box-sizing: border-box;
    background-color: rgba(250, 250, 255, 0.112);

    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: all 0.8s ease;
  }
  &:hover::after,
  &:hover::before {
    border-color: ${(props) => props.theme.colors.button};
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  &:hover {
    transition: 0.5s;
    color: #dedcdc;
    background-color: transparent;
  }

  &:focus {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.button};
    background-color: transparent;
    color: white;
  }

  @media (max-width: 1100px) {
    width: 39px;
    height: 20px;
    font-size: 13px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    width: 80px;
    height: 20px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    width: 54px;
    height: 20px;
  }
`;
export const LargeButton = styled.button`
  background-color: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.buttonText};
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 700;
  outline-style: none;
  width: 70px;
  height: 25px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    box-sizing: border-box;
    background-color: rgba(250, 250, 255, 0.112);

    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: all 0.8s ease;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    box-sizing: border-box;
    background-color: rgba(250, 250, 255, 0.112);

    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: all 0.8s ease;
  }
  &:hover::after,
  &:hover::before {
    border-color: ${(props) => props.theme.colors.button};
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  &:hover {
    transition: 0.5s;
    color: #dedcdc;
    background-color: transparent;
  }

  &:focus {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.button};
    background-color: transparent;
    color: white;
  }

  @media (max-width: 1100px) {
    width: 60px;
    height: 20px;
    font-size: 12.5px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    width: 70px;
    height: 20px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    width: 70px;
    height: 20px;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.icon};
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
// @media (max-width: 1100px) {}
// @media (max-width: 768px) {}
// @media (max-width: 620px) {}
//  @media (max-width: 450px) {}

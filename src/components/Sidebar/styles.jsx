import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 750px;
  display: flex;
  border-radius: 5px;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1366px) {
    max-width: 450px;
    height: 700px;
  }

  /* @media (max-width: 1100px) {
    max-height: 580px;
  }


  @media (max-width: 660px) {
    width: 80vw;
    border-radius: 0px;
    max-height: 70%;
  } */

  /* @media (max-width: 420px) {
    width: 100vw;
    border-radius: 0px;
    max-height: 70%;
  } */
`;

export const Sidebarr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-height: 100%;
  margin-inline: auto;

  /* @media (max-width: 768px) {
    width: 100vw;
    min-height: 100%;
  } */
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.7rem;
`;

export const Button = styled.button`
  background-color: #3a3939;
  color: #e9e0e0;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 14px;
  font-weight: 700;
  outline-style: none;
  height: 25px;
  position: relative;
  border-radius: 4px;
  padding: 0.2rem 0.4rem;

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
  background-color: #3a3939;
  color: #e9e0e0;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 700;
  outline-style: none;
  height: 25px;
  position: relative;
  border-radius: 4px;
  padding: 0.2rem 0.4rem;

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
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  max-height: 100%;
  padding: 1rem;
  padding-top: 0;

  /* @media (max-width: 992px) {
    flex: 3;
    margin-bottom: 5rem;
  } */

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
    border-radius: 5px;
    margin-left: 2rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    margin-left: 2rem;
    background-color: #7f7f8573;
  }

  &::-webkit-scrollbar-thumb {
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

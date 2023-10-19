import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  background-color: rgb(34, 34, 34);
  height: 5rem;
  -webkit-box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.2);
  z-index: 999;

  @media (max-width: 768px) {
    height: 3.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  color: white;
  font-weight: 400;
  margin-bottom: -2px;
  letter-spacing: 0.2rem;
  color: #fccf68;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  > img {
    width: 35px;
    height: 35px;
  }
`;

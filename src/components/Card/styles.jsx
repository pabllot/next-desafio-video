import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #a2a0a047;
  }

  /* @media (max-width: 1024px) {
    width: 320px;
    height: 94px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 18%;
  }
  @media (max-width: 620px) {
    width: 90%;
    height: 18%;
  }
  @media (max-width: 350px) {
    width: 90%;
    height: 18%;
  } */
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  height: 100px;

  /* @media (max-width: 768px) {
    height: 85%;
    width: 50%;
  }
  @media (max-width: 620px) {
    height: 85%;
    width: 50%;
  }
  @media (max-width: 350px) {
    width: 50%;
    height: 85%;
  } */
`;

export const Left = styled.img`
  width: 30%;
  height: 90%;
  border-radius: 4px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 125px;
  }
  @media (max-width: 768px) {
    height: 85%;
    width: 33%;
  }
  @media (max-width: 620px) {
    height: 85%;
    width: 45%;
  }
  @media (max-width: 350px) {
    width: 40%;
    height: 85%;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;
export const Author = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
  font-weight: 300;
  margin: 0;
`;
export const Views = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 11px;
  font-weight: 300;
  margin: 0;
`;
export const Star = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  color: #fccf68;
  margin-right: 0.5rem;
`;

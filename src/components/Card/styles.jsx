import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #a2a0a047;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: 100px;
  @media (max-width: 768px) {
    width: 45%;
  }
`;
export const ImageContainer = styled.div`
  width: 40%;
  height: 90%;
  border-radius: 5px !important;
  padding-left: 0.75rem;
  @media (max-width: 768px) {
    width: 45%;
  }
`;

export const Left = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px !important;
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

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
    }


.loaderWrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 84px;
  height: 84px;
  border: 4px solid #fff;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  animation: loader-anim 3s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid;
  border-color: #c43d3d transparent;
}
@keyframes loader-anim {
  0% {
    transform: scale(1) rotate(360deg);
  }
  50% {
    transform: scale(0.7) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
`;

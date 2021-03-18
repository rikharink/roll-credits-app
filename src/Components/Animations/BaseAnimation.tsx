import styled from "styled-components";

export interface IBaseAnimationProps {
  duration?: string;
  timingFunction?: string;
  delay?: string;
  iterationCount?: string;
  direction?: string;
  fillMode?: string;
  playState?: string;
  display?: string;
}

const BaseAnimation = styled.div<IBaseAnimationProps>`
  animation-duration: ${(props) => props.duration ?? "1s"};
  animation-timing-function: ${(props) => props.timingFunction ?? "ease"};
  animation-delay: ${(props) => props.delay ?? "0s"};
  animation-iteration-count: ${(props) => props.iterationCount ?? "1"};
  animation-direction: ${(props) => props.direction ?? "normal"};
  animation-fill-mode: ${(props) => props.fillMode ?? "both"};
  animation-play-state: ${(props) => props.playState ?? "running"};
  display: ${(props) => props.display ?? "block"};
`;

export { BaseAnimation };

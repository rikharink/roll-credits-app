import { BaseAnimation } from "./BaseAnimation";
import styled, { keyframes } from "styled-components";

const RollCreditsAnimation = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(-100%);
  }
`;

const RollCredits = styled(BaseAnimation)`
  animation-name: ${RollCreditsAnimation};
`;

export { RollCredits };

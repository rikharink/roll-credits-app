import * as React from "react";
import styled from "styled-components";
import { Credits } from "../Components/Credits/Credits";
import {
  CreditsDesign,
  useCreditsDesignContext,
} from "../Context/CreditsContext";
import { BasePage } from "./BasePage";

export interface IRollCreditsPageProps {}

const RollCredits = styled(BasePage)<CreditsDesign>`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.titleColor};
  font-family: ${(props) => props.theme.fontFamily};
  text-shadow: -${(props) => props.theme.widthOutline} -${(props) =>
        props.theme.widthOutline}
      0 ${(props) => props.theme.colorOutline},
    0 -${(props) => props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
    ${(props) => props.theme.widthOutline} -${(props) => props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
    ${(props) => props.theme.widthOutline} 0 0 ${(props) => props.theme.colorOutline},
    ${(props) => props.theme.widthOutline} ${(props) => props.theme.widthOutline} 0
      ${(props) => props.theme.colorOutline},
    0 ${(props) => props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
    -${(props) => props.theme.widthOutline} ${(props) => props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
    -${(props) => props.theme.widthOutline} 0 0 ${(props) => props.theme.colorOutline};
    overflow-y: hidden;
    height: 100%;
`;

export const RollCreditsPage = () => {
  const { creditsDesign } = useCreditsDesignContext();
  return (
    <RollCredits {...creditsDesign}>
      <Credits />
    </RollCredits>
  );
};

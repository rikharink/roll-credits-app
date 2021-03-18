import * as React from "react";
import styled from "styled-components";
import { Credit } from "./Credit";
import { RollCredits } from "../Animations/RollCredits";
import { CreditsDesign, useCreditsDesignContext } from "../../Context/CreditsContext";

const Title = styled.h1<CreditsDesign>`
  font-size: 3.5rem;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.titleColor};
`;

const Subtitle = styled.h2<CreditsDesign>`
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.subtitleColor};
`;

const TitleWrapper = styled.div`
  margin-bottom: 3.5rem;
`;

const CreditsWrapper = styled(RollCredits)`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export function Credits() {
  const { creditsDesign } = useCreditsDesignContext();
  return (
    <CreditsWrapper
      duration={creditsDesign.theme.animationDuration}
      delay={"0s"}
      timingFunction={"linear"}
      iterationCount={"infinite"}
    >
      <TitleWrapper>
        <Title {...creditsDesign}>{creditsDesign.title}</Title>
        {creditsDesign.subtitle ? (
          <Subtitle {...creditsDesign}>{creditsDesign.subtitle}</Subtitle>
        ) : (
          <></>
        )}
      </TitleWrapper>
      {creditsDesign.credits &&
        creditsDesign.credits.map((c, i) => {
          return (
            <Credit
              key={i}
              type={c.type}
              name={c.name}
              description={c.description}
              link={c.link}
            />
          );
        })}
    </CreditsWrapper>
  );
}

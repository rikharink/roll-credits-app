import * as React from "react";
import styled from "styled-components";
import {
  CreditsDesign,
  useCreditsDesignContext,
} from "../../Context/CreditsContext";
import { Credit as CreditModel } from "../../Models/credit.model";

const CreditWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Name = styled.h1<CreditsDesign>`
  font-size: 3rem;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.nameColor};
`;

const Description = styled.h2<CreditsDesign>`
  font-size: 2rem;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.descriptionColor};
`;

const Credit = ({ name, description, type }: CreditModel) => {
  const { creditsDesign } = useCreditsDesignContext();
  if (type === "person") {
    return (
      <CreditWrapper>
        <Name {...creditsDesign}>{name}</Name>
        <Description {...creditsDesign}>{description}</Description>
      </CreditWrapper>
    );
  }

  return <></>;
};

export { Credit };

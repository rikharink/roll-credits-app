import * as React from "react";
import {
  CreditsDesign,
  CreditsDesignTheme,
  useCreditsDesignContext,
} from "../Context/CreditsContext";
import { BasePage } from "./BasePage";
import styled from "styled-components";
import { RollCreditsPage } from "./RollCreditsPage";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { List, arrayMove, arrayRemove, IItemProps } from "react-movable";
import { Credit } from "../Components/Credits/Credit";

const Page = styled(BasePage)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
  }
`;

const Designer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  min-height: 100vh;
  padding: 0 8px;

  @media (max-width: 768px) {
    overflow-y: initial;
  }
`;

const Preview = styled.section`
  overflow: hidden;
`;

const Form = styled.form`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1rem;
  margin-bottom: 0.75rem;

  label {
    font-size: 1.2rem;
    line-height: 36px;
  }

  input {
    height: 36px;
  }
`;

const Button = styled.button`
  align-self: center;
  height: 42px;
  padding: 0 1rem;
  text-transform: lowercase;
  background: transparent;
  border: 2px solid black;
  color: black;
  font-size: 1.1rem;
  font-weight: bolder;
  cursor: pointer;

  :hover {
    background: black;
    color: white;
  }
`;

const FieldSet = styled.fieldset`
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const CreditsSet = styled(FieldSet)``;
const CreditsTitleSet = styled(FieldSet)`
  padding: 1rem;
`;
const ThemeSet = styled(FieldSet)``;

const CreditList = styled.ul<IItemProps>`
  list-style: none;
`;

const Url = styled.a`
  font-size: 1.2rem;
  margin: 1ch 0;
  color: black;

  :hover {
    color: magenta;
  }
`;

const Header = styled.header`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid black;
  background: ghostwhite;
  margin-top: 1rem;

  h1 {
    font-size: 1.2rem;
  }
`;
const Footer = styled.footer`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid black;
  background: ghostwhite;
`;

interface ListItemProps extends IItemProps {
  isDragged: boolean;
  isSelected: boolean;
  isOutOfBounds: boolean;
  background: string;
  backgroundSelected: string;
  backgroundOutOfBounds: string;
  theme: CreditsDesignTheme;
}

const CreditListItem = styled.li<ListItemProps>`
  background: ${(props) =>
    props.isDragged || props.isSelected
      ? props.isOutOfBounds
        ? props.backgroundOutOfBounds
        : props.backgroundSelected
      : props.background};
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 4px;

  div {
    margin-bottom: unset;
  }

  h1 {
    font-size: 1.4rem;
    line-height: 1.2;
  }
  h2 {
    font-size: 1rem;
    line-height: 1.2;
  }

  h1,
  h2 {
    text-shadow: -${(props) => props.theme.widthOutline} -${(props) =>
          props.theme.widthOutline}
        0 ${(props) => props.theme.colorOutline},
      0 -${(props) => props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
      ${(props) => props.theme.widthOutline} -${(props) =>
          props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
      ${(props) => props.theme.widthOutline} 0 0
        ${(props) => props.theme.colorOutline},
      ${(props) => props.theme.widthOutline}
        ${(props) => props.theme.widthOutline} 0
        ${(props) => props.theme.colorOutline},
      0 ${(props) => props.theme.widthOutline} 0
        ${(props) => props.theme.colorOutline},
      -${(props) => props.theme.widthOutline} ${(props) =>
          props.theme.widthOutline} 0 ${(props) => props.theme.colorOutline},
      -${(props) => props.theme.widthOutline} 0 0 ${(props) => props.theme.colorOutline};
  }
`;

export type RollCreditsParams = {
  state: string;
};

export const DesignPage = () => {
  const { creditsDesign, setCreditsDesign } = useCreditsDesignContext();
  const { register, handleSubmit, getValues } = useForm<CreditsDesign>();
  const nameRef = React.createRef<HTMLInputElement>();
  const descriptionRef = React.createRef<HTMLInputElement>();

  const updateState = (data: Partial<CreditsDesign>) => {
    setCreditsDesign({
      ...creditsDesign,
      ...data,
    });
  };

  const onChange = () => {
    updateState({ ...getValues() });
  };

  const onSubmit = () => {};

  const addPerson = (name?: string, description?: string) => {
    if (name) {
      creditsDesign.credits.push({
        type: "person",
        name: name,
        description: description ?? "",
      });
      updateState({
        credits: creditsDesign.credits,
      });

      nameRef.current!.value = "";
      descriptionRef.current!.value = "";
    }
  };

  return (
    <Page>
      <Designer>
        <Header>
          <h1>Roll Credits Designer</h1>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
          <CreditsTitleSet>
            <FormInputWrapper>
              <label htmlFor="title">title</label>
              <input
                defaultValue={creditsDesign.title}
                name="title"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="subtitle">subtitle</label>
              <input
                defaultValue={creditsDesign.subtitle}
                name="subtitle"
                ref={register}
              />
            </FormInputWrapper>
          </CreditsTitleSet>
          <CreditsSet>
            <List
              values={creditsDesign.credits}
              onChange={({ oldIndex, newIndex }) => {
                if (newIndex !== -1) {
                  updateState({
                    credits: arrayMove(
                      creditsDesign.credits,
                      oldIndex,
                      newIndex
                    ),
                  });
                } else {
                  updateState({
                    credits: arrayRemove(creditsDesign.credits, oldIndex),
                  });
                }
              }}
              renderList={({ children, props }) => (
                <CreditList {...props}>{children}</CreditList>
              )}
              renderItem={({
                value,
                props,
                isDragged,
                isSelected,
                isOutOfBounds,
              }) => (
                <CreditListItem
                  isDragged={isDragged}
                  isSelected={isSelected}
                  isOutOfBounds={isOutOfBounds}
                  background={creditsDesign.theme.background}
                  backgroundSelected={creditsDesign.theme.background}
                  backgroundOutOfBounds={"red"}
                  theme={creditsDesign.theme}
                  {...props}
                >
                  <Credit {...value} />
                </CreditListItem>
              )}
              removableByMove={true}
            />
            <FormInputWrapper>
              <label htmlFor="person-name">name</label>
              <input name="subtitle" ref={nameRef} />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="person-description">description</label>
              <input name="description-person" ref={descriptionRef} />
            </FormInputWrapper>
            <Button
              onClick={() =>
                addPerson(nameRef.current?.value, descriptionRef.current?.value)
              }
            >
              add credit
            </Button>
          </CreditsSet>
          <ThemeSet>
            <FormInputWrapper>
              <label htmlFor="background">background color</label>
              <input
                defaultValue={creditsDesign.theme.background}
                name="theme.background"
                type="color"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="color">title color</label>
              <input
                defaultValue={creditsDesign.theme.titleColor}
                name="theme.titleColor"
                type="color"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="color">subtitle color</label>
              <input
                defaultValue={creditsDesign.theme.subtitleColor}
                name="theme.subtitleColor"
                type="color"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="color">name color</label>
              <input
                defaultValue={creditsDesign.theme.nameColor}
                name="theme.nameColor"
                type="color"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="color">description color</label>
              <input
                defaultValue={creditsDesign.theme.descriptionColor}
                name="theme.descriptionColor"
                type="color"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="widthOutline">outline width</label>
              <input
                defaultValue={creditsDesign.theme.widthOutline}
                name="theme.widthOutline"
                type="text"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="colorOutline">outline color</label>
              <input
                defaultValue={creditsDesign.theme.colorOutline}
                name="theme.colorOutline"
                type="color"
                ref={register}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="colorOutline">animation duration</label>
              <input
                defaultValue={creditsDesign.theme.animationDuration}
                name="theme.animationDuration"
                type="text"
                ref={register}
              />
            </FormInputWrapper>
          </ThemeSet>
        </Form>
        <Link to="/credits">
          <Button type="button">Roll Credits</Button>
        </Link>
        <Footer>
          <Url href="https://dev.to/cassidoo/making-a-virtual-credits-sequence-for-your-video-calls-with-obs-and-codepen-3dco">
            Inspired by this post by Cassidy Williams
          </Url>
          <Url href="https://github.com/rikharink/roll-credits-app">
            Made by Rik Harink
          </Url>
        </Footer>
      </Designer>
      <Preview>
        <RollCreditsPage />
      </Preview>
    </Page>
  );
};

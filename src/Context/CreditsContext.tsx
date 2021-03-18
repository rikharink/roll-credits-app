import { createContext, ReactNode, useContext, useState } from "react";
import { Credit } from "../Models/credit.model";

export type CreditsDesignTheme = {
  background: string;
  titleColor: string;
  subtitleColor: string;
  nameColor: string;
  descriptionColor: string;
  fontFamily: string;
  widthOutline: string;
  colorOutline: string;
  animationDuration: string;
};

export interface CreditsDesign {
  title: string;
  subtitle: string;
  credits: Credit[];
  theme: CreditsDesignTheme;
}

export interface CreditsDesignState {
  creditsDesign: CreditsDesign;
  setCreditsDesign: React.Dispatch<React.SetStateAction<CreditsDesign>>;
}

const defaultCredits: CreditsDesign = {
  title: "",
  subtitle: "",
  credits: [],
  theme: {
    background: "#00B140",
    titleColor: "#FFFFFF",
    subtitleColor: "#FFFFFF",
    nameColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
    fontFamily: "Montserrat",
    widthOutline: "2px",
    colorOutline: "black",
    animationDuration: "20s",
  },
};

const defaultCreditsState: CreditsDesignState = {
  creditsDesign: defaultCredits,
  setCreditsDesign: (): void => {},
};

export const CreditsDesignContext = createContext<CreditsDesignState>(
  defaultCreditsState
);

export const useCreditsDesignContext = (): CreditsDesignState => {
  return useContext(CreditsDesignContext);
};

export interface CreditsDesignContextProviderProps {
  defaults?: Partial<CreditsDesign>;
  children?: ReactNode;
}

export const CreditsDesignContextProvider = (
  props: CreditsDesignContextProviderProps
) => {
  const [creditsDesign, setCreditsDesign] = useState<CreditsDesign>({
    ...defaultCredits,
    ...props.defaults,
  });

  return (
    <CreditsDesignContext.Provider
      value={{
        creditsDesign,
        setCreditsDesign,
      }}
    >
      {props.children}
    </CreditsDesignContext.Provider>
  );
};

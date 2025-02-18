import { createContext, PropsWithChildren, useState } from "react";
import { cloneDeep } from "lodash";

import * as Character from "./models/character";

export type CharacterContextType = {
  character: Character.Model;

  updateCharacter: (newCharacter: Character.Model) => void;
};

export const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const CharacterProvider = ({
  children,

  character,
  saveCharacter,
}: PropsWithChildren & {
  character: Character.Model;
  saveCharacter: (character: Character.Model) => void;
}) => {
  const [characterModel, setCharacterModel] =
    useState<Character.Model>(character);

  const updateCharacter = (newCharacter: Character.Model) => {
    setCharacterModel(cloneDeep(newCharacter));

    // persist changes
    saveCharacter(newCharacter);
  };

  return (
    <CharacterContext.Provider
      value={{
        character: characterModel,

        updateCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

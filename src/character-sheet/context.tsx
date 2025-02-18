import { createContext, PropsWithChildren, useEffect, useState } from "react";

import * as Character from "./features/character/models/character";
import { useCharactersApi } from "./hooks/use-character-api";

export type CharacterSheetContextType = {
  status: "initializing" | "ready" | "loading" | "error" | "saving";

  characters: Array<Character.Model>;

  addNewCharacter: () => void;
  resetAllCharacters: () => void;
  saveAllCharacters: () => void;
  saveCharacter: (character: Character.Model) => void;

  error?: any;
};

export const CharacterSheetContext = createContext<
  CharacterSheetContextType | undefined
>(undefined);

export const CharacterSheetProvider = ({ children }: PropsWithChildren) => {
  const [currentError, setCurrentError] = useState<Error | undefined>();

  const [currentState, setCurrentState] =
    useState<CharacterSheetContextType["status"]>("initializing");

  const [characters, setCharacters] = useState<Array<Character.Model>>([]);

  const api = useCharactersApi();

  /* built-in helpers */
  const gotoReadyMode = () => {
    setCurrentState("ready");
  };

  const gotoLoadingMode = () => {
    setCurrentState("loading");
  };

  const gotoErrorMode = (err: Error) => {
    setCurrentError(err);
    setCurrentState("error");
  };

  const resetError = () => {
    setCurrentError(undefined);
  };

  /* business logic */

  const addNewCharacter = () => {
    setCharacters((prev) => [...prev, Character.Model.create()]);
  };

  const resetAllCharacters = () => {
    resetError();
    setCharacters([]);
  };

  const saveAllCharacters = () => {
    resetError();
    gotoLoadingMode();

    api
      .saveCharacters({ characters })
      .then(() => {
        gotoReadyMode();
      })
      .catch((err) => {
        gotoErrorMode(err);
      });
  };

  const saveCharacter = (character: Character.Model) => {
    const updatedCharacterIndex = characters.findIndex(
      (c) => c.id === character.id
    );

    if (updatedCharacterIndex === -1) {
      return;
    }

    setCharacters((prevValue) => {
      const newCharactersList = prevValue.splice(
        updatedCharacterIndex,
        1,
        character
      );
      console.debug("newCharactersList", newCharactersList);
      return newCharactersList;
    });
  };

  // one-time initialization
  useEffect(() => {
    if (currentState !== "initializing") {
      return;
    }

    gotoLoadingMode();

    api
      .loadCharacters()
      .then((loadedCharacters) => {
        setCharacters(loadedCharacters);
        gotoReadyMode();
      })
      .catch((err) => {
        gotoErrorMode(err);
      });
  }, []);

  return (
    <CharacterSheetContext.Provider
      value={{
        status: currentState,
        characters,

        addNewCharacter,
        resetAllCharacters,
        saveAllCharacters,
        saveCharacter,

        error: currentError,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
};

import { useContext } from "react";

import { CharacterSheetContext, CharacterSheetContextType } from "../context";

export const useCharacterSheet = (): CharacterSheetContextType => {
  // ensure context is available
  const context = useContext(CharacterSheetContext);
  if (typeof context === "undefined") {
    throw new Error(
      "useCharacterSheet must be used within a CharacterSheetProvider"
    );
  }

  return context;
};

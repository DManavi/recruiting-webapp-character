import { useContext } from "react";

import { CharacterContext, CharacterContextType } from "../context";

export const useCharacter = (): CharacterContextType => {
  // ensure context is available
  const context = useContext(CharacterContext);
  if (typeof context === "undefined") {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }

  return context;
};

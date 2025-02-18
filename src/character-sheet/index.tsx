import CharacterSheet from "./character-sheet";
import { CharacterSheetProvider } from "./context";

export default function CharacterSheetWithProvider() {
  return (
    <CharacterSheetProvider>
      <CharacterSheet />
    </CharacterSheetProvider>
  );
}

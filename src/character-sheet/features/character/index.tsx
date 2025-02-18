import Character from "./character";
import { CharacterProvider } from "./context";

import { Model } from "./models/character";

type Props = {
  model: Model;

  saveCharacter: (character: Model) => void;
};

export default function CharacterWithProvider(props: Props) {
  const { model, saveCharacter } = props;

  return (
    <CharacterProvider character={model} saveCharacter={saveCharacter}>
      <Character />
    </CharacterProvider>
  );
}

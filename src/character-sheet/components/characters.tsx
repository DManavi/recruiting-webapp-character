import { Box } from "@mui/material";

import Character from "../features/character";
import { Model } from "../features/character/models/character";
import { useCharacterSheet } from "../hooks/use-character-sheet";

type CharactersProps = {
  characters: Array<Model>;
};

export default function Characters({ characters }: CharactersProps) {
  const { saveCharacter } = useCharacterSheet();

  return (
    <Box sx={{ width: "100%" }}>
      {characters.map((character) => (
        <Character
          key={character.id}
          model={character}
          saveCharacter={saveCharacter}
        />
      ))}
    </Box>
  );
}

import { Stack, Button, Divider } from "@mui/material";

import { useCharacterSheet } from "../hooks/use-character-sheet";

export default function Controls() {
  const { addNewCharacter, resetAllCharacters, saveAllCharacters } =
    useCharacterSheet();

  return (
    <Stack
      direction="row"
      spacing={1}
      divider={<Divider orientation="vertical" />}
    >
      <Button variant="outlined" onClick={() => addNewCharacter()}>
        Add new character
      </Button>
      <Button variant="outlined" onClick={() => resetAllCharacters()}>
        Reset All Characters
      </Button>
      <Button variant="outlined" onClick={() => saveAllCharacters()}>
        Save All Characters
      </Button>
    </Stack>
  );
}

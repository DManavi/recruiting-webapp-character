import { Box, Button, Stack } from "@mui/material";

import { useCharacterSheet } from "../hooks/use-character-sheet";

export default function EmptyTemplate() {
  const { addNewCharacter } = useCharacterSheet();

  return (
    <Box>
      <Stack alignItems="center" spacing={2}>
        <h4>No character yet</h4>
        <Button variant="contained" onClick={() => addNewCharacter()}>
          Add new character
        </Button>
      </Stack>
    </Box>
  );
}

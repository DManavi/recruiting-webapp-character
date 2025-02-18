import { Stack } from "@mui/material";

import Error from "./components/error";
import Controls from "./components/controls";
import Characters from "./components/characters";
import Loading from "./components/loading";
import { useCharacterSheet } from "./hooks/use-character-sheet";
import EmptyTemplate from "./components/empty-template";

export default function CharacterSheet() {
  const { error, status, characters } = useCharacterSheet();

  const hasError = typeof error !== "undefined";
  const isLoading = status === "loading";
  const hasCharacters = characters.length > 0;
  const noCharacters =
    ["ready", "error"].includes(status) === true && characters.length === 0;

  return (
    <Stack direction="column" alignItems="center" spacing={5}>
      {isLoading && <Loading />}
      {hasError && <Error error={error} />}
      <Controls />
      {hasCharacters && <Characters characters={characters} />}
      {noCharacters && <EmptyTemplate />}
    </Stack>
  );
}

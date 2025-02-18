import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

import { useCharacter } from "./hooks/use-character";
import Classes from "./components/classes";
import AttributesList from "./components/attributes";
import Skills from "./components/skills";

export default function Character() {
  const { character } = useCharacter();

  return (
    <Accordion expanded>
      <AccordionSummary>
        <Typography component="span">Character {character.id}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={12}></Grid>
          {/*  */}
          <Grid size={4}>
            <AttributesList />
          </Grid>
          <Grid size={4}>
            <Classes />
          </Grid>
          <Grid size={4}>
            <Skills />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

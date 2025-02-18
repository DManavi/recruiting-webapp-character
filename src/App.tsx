import { Container, Divider, Typography } from "@mui/material";

import CharacterSheet from "./character-sheet";

function App() {
  return (
    <Container maxWidth="xl">
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" textAlign="center">
            React Coding Exercise | Danial Manavi
          </Typography>
          <Divider sx={{ my: 2 }} />
        </header>
        <section className="App-section">
          <CharacterSheet />
        </section>
      </div>
    </Container>
  );
}

export default App;

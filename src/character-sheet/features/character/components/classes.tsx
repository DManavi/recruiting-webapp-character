import { Card, CardContent, CardHeader, Chip } from "@mui/material";

import { useCharacter } from "../hooks/use-character";

export default function Classes() {
  const { character } = useCharacter();

  return (
    <Card>
      <CardHeader title="Classes" />
      <CardContent>
        {character.getClasses().map((className, i) => (
          <Chip key={i} label={className} sx={{ mr: 1 }} />
        ))}
      </CardContent>
    </Card>
  );
}

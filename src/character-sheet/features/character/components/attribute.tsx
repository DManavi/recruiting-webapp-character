import { Button, Stack, Typography } from "@mui/material";

type Props = {
  name: string;
  value: number;
  modifier: number;

  onIncrease: () => void;
  onDecrease: () => void;
};

export default function Attributes({
  name,
  value,
  modifier,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onDecrease}>-</Button>
      <Typography>{name}: </Typography>
      <Typography>{value}</Typography>
      <Typography>(Modifier: {modifier})</Typography>
      <Button onClick={onIncrease}>+</Button>
    </Stack>
  );
}

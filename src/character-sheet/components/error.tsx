import { Alert } from "@mui/material";

type ErrorProps = { error: Error };

export default function Error({ error }: ErrorProps) {
  return <Alert severity="error">{error.message}</Alert>;
}

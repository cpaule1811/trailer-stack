import Link from "next/link";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography, Card } from "@mui/material";

export default function Form({ signin, handleForm, error }) {
  const [passwordField, setPasswordField] = useState("");
  const [emailField, setEmailField] = useState("");
  const href = signin ? "register" : "signin"

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={700}>
      <Card
        variant="form"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h5" color="secondary">
          {signin ? "Sign in" : "Register"}
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box>
          <TextField
            type="email"
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
            color="secondary"
            placeholder="email"
            autoFocus
          />
          <TextField
            onChange={(e) => setPasswordField(e.target.value)}
            placeholder="password"
            color="secondary"
            type="password"
            value={passwordField}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => handleForm(e, passwordField, emailField)}
            color="secondary"
          >
            SUBMIT
          </Button>
          <Link href={href} passHref>
            <Typography variant="link" sx={{ display: "block", mt: 1 }} component="a">
              {!signin ? "Sign in" : "Register"}
            </Typography>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

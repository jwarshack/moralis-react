import { useMoralis } from "react-moralis";
import { Input, Box, Button, Container, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react"
import { useState } from "react";
import { Auth } from "./Auth";


function App() {
  const { authenticate, isAuthenticated, isAuthenticating, authError, logout } = useMoralis()

  if(isAuthenticated) {
    return (
    <Container>
      <Heading>Welcome to the Twitter Clone</Heading>
      <Button onClick={() => logout()}>Log Out</Button>
    </Container>
    )
  }
  return (
    <div>
      Twitter clone
      <Auth />

    </div>
  );
}

export default App;

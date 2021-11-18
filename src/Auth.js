import { Text, Stack, Input, Box, Button, Container, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react"
import { useState } from "react";
import { useMoralis } from "react-moralis";


const SignUp = () => {
    const { signup } = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    return <Box>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
        <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>
        <Button onClick={() => signup(email, password)}>SignUp</Button>
      </Box>
  }
  
  const LogIn = () => {
    const { login } = useMoralis()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    return <Box>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
        <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>
        <Button onClick={() => login(email, password)}>LogIn</Button>
      </Box>
  }

export const Auth = () => {
    const { authenticate, isAuthenticated, isAuthenticating, authError, logout } = useMoralis()

    return (
        <Stack spacing={6}>
            {authError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Authentication has failed!</AlertTitle>
              <AlertDescription>{authError.message}</AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
            )}
            <SignUp />
            <Text><em>or</em></Text>
            <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate</Button>
            <LogIn />
        </Stack>
    )
    

}

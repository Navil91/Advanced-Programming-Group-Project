import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Flex,
  Text,
  Stack,
  Group,
  Fieldset,
  Input,
  Button,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import { toaster } from "../ui/toaster";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../ui/style.css";

/**
 * Login Page
 *
 * This page allows the user to get logged in and gain access to the system.
 *
 * @category Page
 * @author Navil Hassan
 */

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginMessage("Login successful!");
      setTimeout(() => setLoginMessage(""), 3000); // Clear message after 3 seconds
      navigate("/"); // Redirect to the home
      setTimeout(() => setLoginMessage("successful"), 3000);
      setTimeout(() => setLoginMessage(""), 3000);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setLoginMessage("Failed to log in. Please check your credentials.");
      setTimeout(() => setLoginMessage(""), 3000);
    }
  };
  useEffect(() => {
    if (loginMessage) {
      toaster.create({
        title: loginMessage,
        type: loginMessage === "Login successful!" ? "success" : "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [loginMessage]);
  return (
    <Stack
      maxW="100vw"
      maxH="100vh"
      alignItems={"center"}
      justifyContent={"center"}
      height="100vh"
      width="100vw"
      gap="2rem"
    >
      <Flex alignItems="center" justifyContent="center" gap="4px">
        <img
          src="/Logo.svg"
          alt="Smart Electricity Logo"
          width="40px"
          height="auto"
        />
        <Text textStyle="xl">Smart Electricity</Text>
      </Flex>
      <Group>
        <Flex flexDirection="column">
          <Text textStyle="2xl" fontWeight="bold">
            Welcome Back!
          </Text>
          <Text textStyle="md">Log In to you account</Text>
        </Flex>
      </Group>

      <Fieldset.Root size="lg" maxW="md">
        <form onSubmit={handleLogin}>
          <Fieldset.Content>
            <Field label="Email address">
              <Input
                name="email"
                type="email"
                placeholder="Enter your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field label="Password">
              <PasswordInput
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
          </Fieldset.Content>
          <Button
            type="submit"
            alignSelf="flex-start"
            w="full"
            className="btn-login"
            mt="2rem"
          >
            Submit
          </Button>
        </form>
      </Fieldset.Root>
    </Stack>
  );
}

LoginPage;

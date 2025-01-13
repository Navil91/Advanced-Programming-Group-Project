/**
 * @file SettingsForm.jsx
 * @description Settings form component for password change functionality
 * @author Navil Hassan
 */

import {
  Input,
  Flex,
  Stack,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import { useState } from "react";
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

export default function SettingsForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const auth = getAuth();
  const toast = useToast();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Test toast to verify it's working
    toast({
      title: "Processing",
      description: "Attempting to change password...",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsLoading(false);
      return;
    }

    try {
      console.log("Starting password change process..."); 
      const user = auth.currentUser;
      
      if (!user) {
        toast({
          title: "Error",
          description: "No user is currently logged in",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsLoading(false);
        return;
      }

      console.log("Creating credential..."); 
      const credential = EmailAuthProvider.credential(
        user.email,
        oldPassword
      );

      console.log("Reauthenticating...");
      await reauthenticateWithCredential(user, credential);

      console.log("Updating password...");
      await updatePassword(user, newPassword);

      toast({
        title: "Success! 🎉",
        description: "Your password has been successfully updated",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      // Clear form
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      
    } catch (error) {
      console.error("Password change error:", error); 
      let errorMessage = "Failed to update password";
      
      if (error.code === 'auth/wrong-password') {
        errorMessage = "Current password is incorrect";
      } else if (error.code === 'auth/requires-recent-login') {
        errorMessage = "Please log out and log back in before changing your password";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "New password is too weak. It should be at least 6 characters";
      }

      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex padding="16px 52px" flexDirection="column">
      <Stack
        direction="column"
        textAlign="left"
        alignItems="start"
        gap={1}
        mb="32px"
      >
        <Text fontSize="xl" fontWeight="bold">
          Settings
        </Text>
        <Text fontSize="sm">Change your password here</Text>
      </Stack>

      <Flex
        maxW="436px"
        padding="16px"
        gap="16px"
        flexDirection="column"
        bgColor="#FAFAFA"
        borderRadius="8px"
      >
        <Stack size="lg" maxW="md">
          <Stack>
            <Text color="#111111" fontWeight="medium">Contact details</Text>
            <Text fontSize="sm" color="gray.500">
              Please provide your contact details below.
            </Text>
          </Stack>

          <form onSubmit={handlePasswordChange}>
            <Stack spacing={4}>
              <Field label="Old Password">
                <PasswordInput
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </Field>

              <Field label="New Password">
                <PasswordInput
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Field>

              <Field label="Confirm Password">
                <PasswordInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Field>

              <Button
                type="submit"
                alignSelf="flex-end"
                color="#fafafa"
                bgColor="#DB2777"
                isLoading={isLoading}
                _hover={{ bgColor: "#BE185D" }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Flex>
  );
}
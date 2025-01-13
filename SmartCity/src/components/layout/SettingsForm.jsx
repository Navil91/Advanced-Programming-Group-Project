import {
  Input,
  Flex,
  Fieldset,
  Stack,
  Button,
  Group,
  Text,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";

export default function SettingsForm() {
  return (
    <Flex padding="16px 52px" flexDirection="column">
      <Group
        flexDirection="column"
        textAlign="left"
        alignItems="start"
        gap={1}
        mb="32px"
      >
        <Text textStyle="xl" fontWeight="bold">
          Settings
        </Text>
        <Text textStyle="sm">Change your password here</Text>
      </Group>
      <Flex
        maxW="436px"
        padding="16px"
        gap="16px"
        flexDirection="column"
        bgColor="#FAFAFA"
        borderRadius="8px"
      >
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend color="#111111">Contact details</Fieldset.Legend>
            <Fieldset.HelperText>
              Please provide your contact details below.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field label="Old Password">
              <PasswordInput />
            </Field>

            <Field label="New Password">
              <Input type="password" />
            </Field>

            <Field label="Confirm Password">
              <PasswordInput />
            </Field>
          </Fieldset.Content>

          <Button
            type="submit"
            alignSelf="flex-end"
            color="#fafafa"
            bgColor="#DB2777"
          >
            Submit
          </Button>
        </Fieldset.Root>
      </Flex>
    </Flex>
  );
}

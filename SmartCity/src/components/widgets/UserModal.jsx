import { Button } from "../ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import "../ui/style.css";
import { Flex, Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
export default function UserModal() {
  return (
    <DialogRoot placement={"center"}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="btn-add-user">
          Add New User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New user</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {/* Modal Body  */}
          <Flex flexDirection={"column"} gap="8px">
          <Field label="User Id" errorText="This field is required">
            <Input placeholder="Enter your email" />
          </Field>
          <Field label="User Type" errorText="This field is required">
            <Input placeholder="Enter your email" />
          </Field>
          <Field label="Password">
            <PasswordInput />
          </Field>
          </Flex>
          {/* End of Modal  */}
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button variant="solid" className="btn-save">
            Save
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}

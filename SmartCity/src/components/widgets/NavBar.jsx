import { Flex, HStack, Link } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Moon, LogOut } from "lucide-react";
import "../ui/style.css";
// eslint-disable-next-line react/prop-types
export default function NavBar({ onHandleSettings, settings }) {
  return (
    <HStack
      w="dvw"
      h="52px"
      bgColor="gray.50"
      justifyContent="space-between"
      p="0 60px"
    >
      {/* left content  */}
      <Flex alignItem="center" justifyContent="center">
        Logo
      </Flex>
      {/* middle content  */}
      <Flex alignItem="center" justifyContent="center" gap="20px">
        <Link
          onClick={() => onHandleSettings(false)}
          color={settings ? "#111111" : "#DB2777"}
          variant="plain"
          className="nav-link"
        >
          Home
        </Link>
        <Link
          onClick={() => onHandleSettings(true)}
          variant="plain"
          color={!settings ? "#111111" : "#DB2777"}
          className="nav-link"
        >
          Settings
        </Link>
      </Flex>
      {/* right content  */}
      <HStack alignItem="center" justifyContent="center" gap="20px">
        <Moon strokeWidth={1.25} />
        <LogOut strokeWidth={1.25} />
        <Avatar
          variant="solid"
          name="Admin"
          shape="rounded"
          size="sm"
          bgColor="#DB2777"
          color="#fafafa"
        />
      </HStack>
    </HStack>
  );
}

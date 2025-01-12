import { Flex, HStack, Link } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Moon, LogOut } from "lucide-react";
import "../ui/style.css";
// eslint-disable-next-line react/prop-types
export default function NavBar({ activeNav, onHandleActiveNav, currentUser }) {
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
        <img src="/Logo.svg" /> Smart Electricity
      </Flex>
      {/* middle content  */}
      <Flex alignItem="center" justifyContent="center" gap="20px">
        <Link
          onClick={() => onHandleActiveNav("home")}
          color={activeNav == "home" ? "#DB2777" : "#111111"}
          variant="plain"
          className="nav-link"
        >
          Home
        </Link>
        {currentUser == "provider" ? (
          <Link
            onClick={() => onHandleActiveNav("users")}
            color={activeNav == "users" ? "#DB2777" : "#111111"}
            variant="plain"
            className="nav-link"
          >
            Users
          </Link>
        ) : (
          ""
        )}
        <Link
          onClick={() => onHandleActiveNav("settings")}
          variant="plain"
          color={activeNav == "settings" ? "#DB2777" : "#111111"}
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

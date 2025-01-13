/**
 * @file NavBar.jsx
 * @description Navigation bar component for the Smart Electricity application.
 * Handles navigation between different sections and user logout functionality.
 * @author Navil Hassan
 */

import { Flex, HStack, Link } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { LogOut } from "lucide-react";
import { Tooltip } from "../ui/tooltip";
import "../ui/style.css";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

/**
 * NavBar Component
 * @component
 * @param {Object} props - Component props
 * @param {string} props.activeNav - Currently active navigation item
 * @param {Function} props.onHandleActiveNav - Handler for navigation changes
 * @param {string} props.currentUser - Current user type (e.g., "provider")
 * @returns {JSX.Element} Navigation bar with dynamic routing and logout functionality
 */

// eslint-disable-next-line react/prop-types
export default function NavBar({ activeNav, onHandleActiveNav, currentUser }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

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
        <Tooltip content="LogOut" showArrow>
          <LogOut strokeWidth={1.25} cursor="pointer" onClick={handleLogout} />
        </Tooltip>

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

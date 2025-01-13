/**
 * Home Dashboard
 *
 * This component renders the main dashboard for the application. It manages
 * navigation between different sections such as the home dashboard, user settings,
 * and user management.
 *
 * @category Component
 * @author Abhinav Prasannakumar
 * @param {Object} props - React component props.
 * @param {Object} props.currentUser - The currently logged-in user.
 * @param {Function} props.setCurrentUser - Function to update the current user state.
 * @returns {JSX.Element} The rendered dashboard component.
 */

import { useState } from "react";
import NavBar from "../widgets/NavBar";
import HomeGrid from "./HomeGrid";
import SettingsForm from "./SettingsForm";
import { Flex, Group, Text } from "@chakra-ui/react";
import Users from "./Users";
/**
 * Renders the HomeDashboard component.
 * Handles navigation and conditionally renders content based on the active section.
 *
 * @function HomeDashboard
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.currentUser - The logged-in user's data.
 * @param {Function} props.setCurrentUser - Callback to update the logged-in user's data.
 */
// eslint-disable-next-line react/prop-types
function HomeDashboard({ currentUser, setCurrentUser }) {
  /**
   * State to manage the currently active navigation section.
   * @type {string}
   */
  const [activeNav, setActiveNav] = useState("home");
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <NavBar
        currentUser={currentUser}
        activeNav={activeNav}
        onHandleActiveNav={setActiveNav}
        onHandleCurrentUser={setCurrentUser}
      />
      {activeNav == "settings" ? (
        <SettingsForm />
      ) : activeNav == "users" ? (
        <Users />
      ) : (
        <Flex flexDirection="column" padding="16px 52px">
          <Group
            flexDirection="column"
            textAlign="left"
            alignItems="start"
            gap={1}
            mb="32px"
          >
            <Text textStyle="xl" fontWeight="bold">
              Dashboard
            </Text>
            <Text textStyle="sm">View all data of Cities</Text>
          </Group>
          <HomeGrid currentUser={currentUser} />
        </Flex>
      )}
    </>
  );
}

export default HomeDashboard;

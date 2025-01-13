import { useState } from "react";
import NavBar from "../widgets/NavBar";
import HomeGrid from "./HomeGrid";
import SettingsForm from "./SettingsForm";
import { Flex, Group, Text } from "@chakra-ui/react";
import Users from "./Users";
function HomeDashboard() {
  const [activeNav, setActiveNav] = useState("home");
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState("admin");
  return (
    <>
      <NavBar
        currentUser={currentUser}
        activeNav={activeNav}
        onHandleActiveNav={setActiveNav}
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

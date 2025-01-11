import { useState } from "react";
import NavBar from "../widgets/NavBar";
import HomeGrid from "./HomeGrid";
import SettingsForm from "./SettingsForm";
import { Flex, Group, Text } from "@chakra-ui/react";
import Users from "./Users";
function HomeDashboard() {
  const [activeNav, setActiveNav] = useState("home");
  const [currentUser,setCurrentUser] = useState("provider")
  return (
    <>
      <NavBar currentUser={currentUser} activeNav={activeNav} onHandleActiveNav={setActiveNav} />
      {activeNav=="settings" ? (
        <SettingsForm />
      ) : activeNav=="users" ? <Users/>:(
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
          <HomeGrid />
        </Flex>
      )}
    </>
  );
}

export default HomeDashboard;

import { useState } from "react";
import NavBar from "../widgets/NavBar";
import HomeGrid from "./HomeGrid";
import SettingsForm from "./SettingsForm";
import { Flex, Group, Text } from "@chakra-ui/react";
function HomeDashboard() {
  const [settings, setSetttings] = useState(false);
  return (
    <>
      <NavBar settings={settings} onHandleSettings={setSetttings} />
      {settings ? (
        <SettingsForm />
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
          <HomeGrid />
        </Flex>
      )}
    </>
  );
}

export default HomeDashboard;

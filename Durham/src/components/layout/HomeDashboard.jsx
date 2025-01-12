import { Box, Group, Text } from "@chakra-ui/react";
import HomeGrid from "../widgets/HomeGrid";

function HomeDashboard() {
  return (
    <Box padding="16px 52px">
      <Group
        flexDirection="column"
        textAlign="left"
        alignItems="start"
        gap={1}
        mb="32px"
      >
        <Text textStyle="lg" fontWeight="bold">
          Durham
        </Text>
        <Text textStyle="sm">
          View average electricity usage summary of Durham City
        </Text>
      </Group>
      <HomeGrid />
    </Box>
  );
}

export default HomeDashboard;

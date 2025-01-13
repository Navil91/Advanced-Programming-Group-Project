/**
 * HomeDashboard Component
 * Author: Abhinav Prasannakumar
 *
 * Displays the main dashboard view with an introductory section
 * and a grid layout for showcasing electricity usage data.
 *
 * Functionality:
 * - Displays a title "Sunderland" with a brief description.
 * - Uses `HomeGrid` component to show electricity usage data in a grid format.
 *
 * Imports:
 * - `Box`, `Group`, `Text` from Chakra UI for layout and styling.
 * - `HomeGrid` for the main content grid.
 */
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
          Sunderland
        </Text>
        <Text textStyle="sm">
          View average electricity usage summary of Sunderland City
        </Text>
      </Group>
      <HomeGrid />
    </Box>
  );
}

export default HomeDashboard;

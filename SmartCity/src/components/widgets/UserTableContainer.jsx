/**
 * User Table Container
 *
 * This component provides a tabbed interface to switch between two tables:
 * - Users Table: Displays a list of users.
 * - Consumption Table: Displays consumption data for users.
 *@author Aswathy Sanal
 * @category Component
 * @returns {JSX.Element} The tabbed table container layout.
 */
import { Box, Link, Tabs } from "@chakra-ui/react";
import UserTable from "./UserTable";
import ConsumptionTable from "./ConsumptionTable";
/**
 * Renders the UserTableContainer component.
 * This component uses a tabbed interface to allow switching between "Users" and "Consumption" views.
 *
 * @function UserTableContainer
 */
export default function UserTableContainer() {
  return (
    <Box w="full" bgColor="#fafafa" borderRadius="8px" padding="32px 16px">
      <Tabs.Root defaultValue="members" stickyHeader>
        <Tabs.List>
          <Tabs.Trigger value="members" asChild>
            <Link unstyled href="#members" color="#111111">
              Users
            </Link>
          </Tabs.Trigger>
          <Tabs.Trigger value="projects" asChild>
            <Link unstyled href="#projects" color="#111111">
              Consumption
            </Link>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="members">
          <UserTable />
        </Tabs.Content>
        <Tabs.Content value="projects">
          <ConsumptionTable />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}

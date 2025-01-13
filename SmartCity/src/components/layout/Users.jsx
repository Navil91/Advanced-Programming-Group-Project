/**
 * Users Page
 *
 * This component renders the "Users" page, which provides functionality to manage users.
 * It includes a header, a modal for adding new users, and a table displaying user information.
 *@author Aswathy Sanal
 * @category Page
 * @returns {JSX.Element} The rendered "Users" page layout.
 */

import { Box, Flex, Group, Text } from "@chakra-ui/react";
import UserTableContainer from "../widgets/UserTableContainer";
import UserModal from "../widgets/UserModal";
/**
 * Renders the Users component.
 * This component includes a header section for the page title, a modal for managing users,
 * and a table displaying all user data.
 *
 * @function Users
 */
export default function Users() {
  return (
    <Box padding="16px 52px" width="full">
      <Flex justifyContent={"space-between"}>
        <Group
          flexDirection="column"
          textAlign="left"
          alignItems="start"
          gap={1}
          mb="32px"
        >
          <Text textStyle="xl" fontWeight="bold">
            Users
          </Text>
          <Text textStyle="sm">Manage all users here</Text>
        </Group>
        <UserModal />
      </Flex>
      <UserTableContainer />
    </Box>
  );
}

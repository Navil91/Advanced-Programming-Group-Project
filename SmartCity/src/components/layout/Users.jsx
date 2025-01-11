import { Box, Flex,Group,Text } from "@chakra-ui/react";
import UserTableContainer from "../widgets/UserTableContainer";
import UserModal from "../widgets/UserModal";
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
        <UserModal/>
      </Flex>
      <UserTableContainer />
    </Box>
  );
}

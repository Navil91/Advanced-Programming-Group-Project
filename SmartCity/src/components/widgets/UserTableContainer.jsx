import {Box,Link,Tabs} from "@chakra-ui/react";
import UserTable from "./UserTable";
import ConsumptionTable from "./ConsumptionTable";
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
      <Tabs.Content value="members"><UserTable/></Tabs.Content>
      <Tabs.Content value="projects"><ConsumptionTable/></Tabs.Content>
    </Tabs.Root>
    </Box>
  )
}

import { Tabs } from "@chakra-ui/react";
import { useState } from "react";
import UserTable from "./UserTable";
import ConsumptionTable from "./ConsumptionTable";

export default function UserTabs() {
  const [value, setValue] = useState("first");
  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <Tabs.List>
        <Tabs.Trigger value="first">User</Tabs.Trigger>
        <Tabs.Trigger value="second">Consumption</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="first">
        <UserTable />
      </Tabs.Content>
      <Tabs.Content value="second">
        <ConsumptionTable />
      </Tabs.Content>
    </Tabs.Root>
  );
}

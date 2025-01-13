import { Tabs } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import UserTable from "./UserTable";
import ConsumptionTable from "./ConsumptionTable";

export default function UserTabs() {
  const [value, setValue] = useState("first");
  const [userConsumption, setuserConsumption] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(function () {
    async function getConsumptionData() {
      try {
        const res = await fetch(
          "http://localhost:8750/api/provider/getallconsumption"
        );
        if (!res.ok) throw new Error("Something went wrong with fetching");
        const data = await res.json();
        setuserConsumption(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getConsumptionData();
  }, []);
  useEffect(function () {
    async function getConsumptionData() {
      try {
        const res = await fetch("http://localhost:8750/api/citizen/getuser");
        if (!res.ok) throw new Error("Something went wrong with fetching");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getConsumptionData();
  }, []);

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <Tabs.List>
        <Tabs.Trigger value="first">User</Tabs.Trigger>
        <Tabs.Trigger value="second">Consumption</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="first">
        <UserTable user={user} />
      </Tabs.Content>
      <Tabs.Content value="second">
        <ConsumptionTable userConsumption={userConsumption} />
      </Tabs.Content>
    </Tabs.Root>
  );
}

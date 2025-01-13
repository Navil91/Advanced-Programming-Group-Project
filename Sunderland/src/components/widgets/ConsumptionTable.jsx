/* eslint-disable react/prop-types */
import { Table } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
export default function ConsumptionTable({ userConsumption = items }) {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="320px">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>User Id</Table.ColumnHeader>
            <Table.ColumnHeader>Month</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Consumption</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {userConsumption.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.userid}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell textAlign="end">{item.consumption}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
const items = [
  { id: 1, userid: "User 1", date: "Jan", consumption: 12 },
  { id: 2, userid: "User 2", date: "Jan", consumption: 14 },
  { id: 3, userid: "User 3", date: "Jan", consumption: 20 },
  { id: 4, userid: "User 4", date: "Jan", consumption: 17 },
  { id: 5, userid: "User 5", date: "Jans", consumption: 16 },
];

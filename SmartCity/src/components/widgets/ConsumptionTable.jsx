import { Table } from "@chakra-ui/react";
export default function ConsumptionTable() {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="full">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>User Id</Table.ColumnHeader>
            <Table.ColumnHeader>Month</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Consumption</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
const items = [
  { id: 1, name: "User 1", category: "Jan", price: 12 },
  { id: 2, name: "User 2", category: "Jan", price: 14 },
  { id: 3, name: "User 3", category: "Jan", price: 20 },
  { id: 4, name: "User 4", category: "Jan", price: 17 },
  { id: 5, name: "User 5", category: "Jans", price: 16 },
];

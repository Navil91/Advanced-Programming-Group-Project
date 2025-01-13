import { Table } from "@chakra-ui/react";
export default function UserTable() {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="100%">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>User Id</Table.ColumnHeader>
            <Table.ColumnHeader>Provider</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">User Type</Table.ColumnHeader>
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
  { id: 1, name: "User 1", category: "Provider A", price: "Manual" },
  { id: 2, name: "User 2", category: "Provider A", price: "Smart Meter" },
  { id: 3, name: "User 3", category: "Provider B", price: "Manual" },
  { id: 4, name: "User 4", category: "Provider C", price: "Manual" },
  { id: 5, name: "User 5", category: "Provider B", price: "Smart Meter" },
];

import { Table } from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types
export default function UserTable({ user = items }) {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="300px">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>User Id</Table.ColumnHeader>
            <Table.ColumnHeader>Provider</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">User Type</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {user.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>User {item.id}</Table.Cell>
              <Table.Cell>{item.provider}</Table.Cell>
              <Table.Cell textAlign="end">{item.usertype}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
const items = [
  { id: 1, provider: "Provider A", usertype: "Manual" },
  { id: 2, provider: "Provider A", usertype: "Smart Meter" },
  { id: 3, provider: "Provider B", usertype: "Manual" },
  { id: 4, provider: "Provider C", usertype: "Manual" },
  { id: 5, provider: "Provider B", usertype: "Smart Meter" },
];

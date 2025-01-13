import { Table } from "@chakra-ui/react";
import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "../ui/action-bar";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function TableContent() {
  const [selection, setSelection] = useState([]);

  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < items.length;

  const rows = items.map((item) => (
    <Table.Row
      key={item.name}
      data-selected={selection.includes(item.name) ? "" : undefined}
    >
      <Table.Cell>
        <Checkbox
          top="1"
          aria-label="Select row"
          checked={selection.includes(item.name)}
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, item.name]
                : selection.filter((name) => name !== item.name)
            );
          }}
        />
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.category}</Table.Cell>
      <Table.Cell>${item.price}</Table.Cell>
    </Table.Row>
  ));

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w="6">
              <Checkbox
                top="1"
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked ? items.map((item) => item.name) : []
                  );
                }}
              />
            </Table.ColumnHeader>
            <Table.ColumnHeader>User Id</Table.ColumnHeader>
            <Table.ColumnHeader>Provider</Table.ColumnHeader>
            <Table.ColumnHeader>User Type</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>
            {selection.length} selected
          </ActionBarSelectionTrigger>
          <ActionBarSeparator />

          <DeleteConfirmModal />
        </ActionBarContent>
      </ActionBarRoot>
    </>
  );
}
const items = [
  { id: 1, name: "User 1", category: "Provider A", price: "Manual" },
  { id: 2, name: "User 2", category: "Provider A", price: "Smart Meter" },
  { id: 3, name: "User 3", category: "Provider B", price: "Manual" },
  { id: 4, name: "User 4", category: "Provider C", price: "Manual" },
  { id: 5, name: "User 5", category: "Provider B", price: "Smart Meter" },
];

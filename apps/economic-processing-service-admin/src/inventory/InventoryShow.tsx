import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { INVENTORY_TITLE_FIELD } from "./InventoryTitle";
import { STOREKEEPER_TITLE_FIELD } from "../storekeeper/StorekeeperTitle";

export const InventoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="item_name" source="itemName" />
        <TextField label="quantity" source="quantity" />
        <ReferenceField
          label="Storekeeper"
          source="storekeeper.id"
          reference="Storekeeper"
        >
          <TextField source={STOREKEEPER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Request"
          target="inventoryId"
          label="Requests"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Inventory"
              source="inventory.id"
              reference="Inventory"
            >
              <TextField source={INVENTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ReservationQueue"
          target="inventoryId"
          label="ReservationQueues"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Inventory"
              source="inventory.id"
              reference="Inventory"
            >
              <TextField source={INVENTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

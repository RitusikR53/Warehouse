import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";

export const RequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="inventory.id"
          reference="Inventory"
          label="Inventory"
        >
          <SelectInput optionText={InventoryTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

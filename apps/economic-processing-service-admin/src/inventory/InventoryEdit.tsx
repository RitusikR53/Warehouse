import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RequestTitle } from "../request/RequestTitle";
import { ReservationQueueTitle } from "../reservationQueue/ReservationQueueTitle";
import { StorekeeperTitle } from "../storekeeper/StorekeeperTitle";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="item_name" source="itemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceArrayInput
          source="requests"
          reference="Request"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reservationQueues"
          reference="ReservationQueue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationQueueTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="storekeeper.id"
          reference="Storekeeper"
          label="Storekeeper"
        >
          <SelectInput optionText={StorekeeperTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

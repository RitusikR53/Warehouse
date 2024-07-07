import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RequestList } from "./request/RequestList";
import { RequestCreate } from "./request/RequestCreate";
import { RequestEdit } from "./request/RequestEdit";
import { RequestShow } from "./request/RequestShow";
import { StorekeeperList } from "./storekeeper/StorekeeperList";
import { StorekeeperCreate } from "./storekeeper/StorekeeperCreate";
import { StorekeeperEdit } from "./storekeeper/StorekeeperEdit";
import { StorekeeperShow } from "./storekeeper/StorekeeperShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { ReservationQueueList } from "./reservationQueue/ReservationQueueList";
import { ReservationQueueCreate } from "./reservationQueue/ReservationQueueCreate";
import { ReservationQueueEdit } from "./reservationQueue/ReservationQueueEdit";
import { ReservationQueueShow } from "./reservationQueue/ReservationQueueShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EconomicProcessingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Request"
          list={RequestList}
          edit={RequestEdit}
          create={RequestCreate}
          show={RequestShow}
        />
        <Resource
          name="Storekeeper"
          list={StorekeeperList}
          edit={StorekeeperEdit}
          create={StorekeeperCreate}
          show={StorekeeperShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="ReservationQueue"
          list={ReservationQueueList}
          edit={ReservationQueueEdit}
          create={ReservationQueueCreate}
          show={ReservationQueueShow}
        />
      </Admin>
    </div>
  );
};

export default App;

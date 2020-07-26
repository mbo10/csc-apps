import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';
const ENDPOINT = "http://127.0.0.1:4000";

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("table update", data => {
      setItems(data);
    });
  }, []);

  let itemsToRender;
  let stateToRender;
  let numRows;
  let numRun = 0;
  let numStop = 0;

  if (items) {
    itemsToRender = Object.values(items).map(item => {
      if(item.state == "Running"){
        stateToRender = <Table.Cell positive><Icon name='checkmark' />{item.state}</Table.Cell>
        numRun++;
      } else {
        stateToRender = <Table.Cell negative><Icon name='close' />{item.state}</Table.Cell>
        numStop++;
      };
      return <Table.Row key={item.app_id}>
                <Table.Cell >{item.app_name}</Table.Cell>
                <Table.Cell>{item.version_num}</Table.Cell>
                <Table.Cell>{item.owner}</Table.Cell>
                <Table.Cell>{item.last_updated}</Table.Cell>
                {stateToRender}
                <Table.Cell>{item.environment_name}</Table.Cell>
              </Table.Row>
    });
    numRows = itemsToRender.length;
  }

    return <>
          <h1 class="ui header" style={{paddingLeft: '75px', paddingTop: '20px', baddingBottom: '20px'}}>
            <i class="eye icon"></i>
            <div class="content">
              CSC Apps
            </div>
          </h1>
          </>
};

export default App;
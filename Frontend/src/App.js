import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

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
          <div style={{paddingLeft: '70px', float : 'center', paddingRight : '70px'}}> 
            <Table columns={6} color='green' celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>App Name</Table.HeaderCell>
                  <Table.HeaderCell>Version Number</Table.HeaderCell>
                  <Table.HeaderCell>Owner</Table.HeaderCell>
                  <Table.HeaderCell>Last Updated</Table.HeaderCell>
                  <Table.HeaderCell>State</Table.HeaderCell>
                  <Table.HeaderCell>Environment Name</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {itemsToRender}
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell>Showing {numRows} Apps</Table.HeaderCell>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                  <Table.HeaderCell>{numRun} Running & {numStop} Stopped</Table.HeaderCell>
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Footer>
            </Table>
            <div align="center" style={{paddingLeft: '10px', paddingTop: '40px'}}>
            <tfoot>
              <tr><th colspan="5">
                <div class="ui right floated pagination menu">
                  <a class="icon item">
                    <i class="left chevron icon"></i>
                  </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                    <i class="right chevron icon"></i>
                  </a>
                </div>
              </th>
            </tr></tfoot>
            </div>
          </div>  
          </>
};

export default App;
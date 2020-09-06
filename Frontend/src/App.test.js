import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("App renders without crashing", () => {
  shallow(<App />);
});

it("renders App header", () => {
  const wrapper = shallow(<App />);
  const header = <h1 class="ui header" style={{paddingLeft: '75px', paddingTop: '20px', baddingBottom: '20px'}}>
            <i class="eye icon"></i>
            <div class="content">
              CSC Apps
            </div>
          </h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

it("renders Table footer", () => {
  const wrapper = shallow(<App />);
  const tableFooter = <div align="center" style={{paddingLeft: '10px', paddingTop: '40px'}}>
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
  expect(wrapper.contains(tableFooter)).toEqual(true);
});
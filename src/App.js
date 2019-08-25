import * as React from "react";

import {MenuItem} from "./components/Menu/MenuItem";
import {MenuItemGroup} from "./components/Menu/MenuItemGroup";
import { CParent, FParent } from "./components/Pure";

import "./App.css";

const flag = false;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header id={"header"}>
          Header
        </header>
        <section id={"menu"}>
          <MenuItemGroup>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
            <MenuItem>Item 5</MenuItem>
            <MenuItem>Item 6</MenuItem>
            <MenuItem>Item 7</MenuItem>
            <MenuItem>Item 8</MenuItem>
            <MenuItem>Item 9</MenuItem>
            {
              flag && <MenuItem>Item 10</MenuItem>
            }
          </MenuItemGroup>
        </section>
        <main id={"content"}>
          Content
          <CParent />
          <FParent />
        </main>
        <footer id={"footer"}>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;

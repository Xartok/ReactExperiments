import * as React from 'react';
import './App.css';
import {MenuGroup} from "./components/Menu/MenuGroup";
import {MenuItem} from "./components/Menu/MenuItem";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>
          Header
        </header>
        <section id={"menu"}>
          <MenuGroup>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuGroup>
        </section>
        <main>
          Content
        </main>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;

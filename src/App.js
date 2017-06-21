import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';

import 'react-infinite-calendar/styles.css';
import './App.css';

class App extends Component {
  testing() {
    <InfiniteCalendar
      width={400}
      height={600}
      selected={new Date()}
      disabledDays={[0,6]}
      onSelect={(data) => alert(data)}
    />
  }
  render() {
    return (
      <div className="App">
        <input type="text" onClick={() => this.testing()} />
      </div>
    );
  }
}

export default App;

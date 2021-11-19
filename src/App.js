import React, {Component} from 'react';
import './App.css';
import SearchBox from './searchLayout';




class App extends Component {
  render() {
    return (
      <div>
      <div className='emojiheader'>
          <h1>Emoji App</h1>
      </div>
      <SearchBox/>
      <ListLayout/>
      </div>
    );
  }
}

export default App;

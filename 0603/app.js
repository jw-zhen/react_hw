import React from 'react';

import "./styles.css";


// class component 使用 setState()

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { count: 0 };
 }

 render() {
   return (
     <div className="App">
       <h2>我是 count = {this.state.count}</h2>
       <button onClick={() => this.setState({count: this.state.count + 1})}>按我+1</button>
       <button onClick={() => this.setState({count: this.state.count - 1})}>按我-1</button>
     </div>
   );
 }
}

export default App;
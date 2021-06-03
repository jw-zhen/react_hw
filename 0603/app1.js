import React,{useState} from 'react';

import "./styles.css";


// Hook function compenent 使用 setState()

function App () {
    const [count,setCount] =useState(0);

   return (
     <div className="App">
       <h2>我是 count = {count}</h2>
       <button onClick={() => setCount(count + 1)}>按我+1</button>
       <button onClick={() => setCount(count- 1)}>按我-1</button>
     </div>
   );
 }

export default App;
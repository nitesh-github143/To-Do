import { useState } from 'react';
import './App.css';
import DB from './Data'
import Form from './components/Form';
import List from './components/List';


function App() {
  const [data, setData] = useState(DB)
  return (
    <div className="App">
      <Form></Form>
      <List data={data}></List>
    </div>
  );
}

export default App;

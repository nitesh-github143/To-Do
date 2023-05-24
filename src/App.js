import { useState } from 'react';
import './App.css';
import DB from './Data'
import Form from './components/Form';
import List from './components/List';



function App() {

  const [data, setData] = useState(DB)

  function addItem(newItem) {
    setData([
      ...data,
      { ...newItem, id: data.length + 1 }
    ])
  }

  function deleteItem(id) {
    setData(data.filter(item => item.id !== id))
  }

  function editItem(id) {
    console.log(id)
  }

  return (
    <div className="App">
      <Form addItem={addItem}></Form>
      <List data={data} deleteItem={deleteItem} editItem={editItem}></List>
    </div>
  );
}

export default App;

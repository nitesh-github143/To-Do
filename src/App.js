import { useState } from 'react';
import './App.css';
import DB from './Data'
import Form from './components/Form';
import List from './components/List';



function App() {

  const [data, setData] = useState(DB)
  const [editingItem, setEditingItem] = useState(null)

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
    setEditingItem(data.find(item => item.id === id))
  }

  function updateItem(item) {
    const index = data.findIndex(todo => todo.id === item.id)
    const updatedList = [...data]
    updatedList.splice(index, 1, item)
    setData(updatedList)
    setEditingItem(null)
  }

  return (
    <div className="App">
      <Form addItem={addItem} editingItem={editingItem} updateItem={updateItem}></Form>
      <List data={data} deleteItem={deleteItem} editItem={editItem}></List>
    </div>
  );
}

export default App;

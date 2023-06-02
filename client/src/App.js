import { useEffect, useState } from 'react';
import './App.css';
import DB from './Data'
import Form from './components/Form';
import List from './components/List';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const [editingItem, setEditingItem] = useState(null)

  // fetch data from api
  useEffect(() => {
    getTodo()
  }, [])


  const getTodo = async () => {
    const res = await axios.get('http://localhost:4000/todo')
    setData(res.data)
  }


  const addItem = async (newItem) => {
    setData([
      ...data,
      { ...newItem }
    ])
  }

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:4000/todo/${id}`);
    setData(data.filter((item) => item._id !== id));

  }

  const editItem = (id) => {
    const item = data.find((item) => item._id === id);
    setEditingItem(item);
  }

  const updateItem = async (item) => {
    const res = await axios.patch(`http://localhost:4000/todo/${item._id}`, item)
    const index = data.findIndex(todo => todo._id === res.data._id)
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

import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios'

function App() {
  const BASE_URL = "https://todo-backend-39w6.onrender.com"
  const [data, setData] = useState([])
  const [editingItem, setEditingItem] = useState(null)

  // fetch data from api
  useEffect(() => {
    getTodo()
  }, [])


  const getTodo = async () => {
    const res = await axios.get(`${BASE_URL}/todo`)
    setData(res.data)
  }


  const addItem = async (newItem) => {
    setData([
      ...data,
      { ...newItem }
    ])
  }

  const deleteItem = async (id) => {
    await axios.delete(`${BASE_URL}/todo/${id}`);
    setData(data.filter((item) => item._id !== id));

  }

  const editItem = (id) => {
    const item = data.find((item) => item._id === id);
    setEditingItem(item);
  }

  const updateItem = async (item) => {
    const res = await axios.patch(`${BASE_URL}/todo/${item._id}`, item)
    const index = data.findIndex(todo => todo._id === res.data._id)
    const updatedList = [...data]
    updatedList.splice(index, 1, item)
    setData(updatedList)
    setEditingItem(null)
  }

  return (
    <div className="App">
      <Form addItem={addItem} editingItem={editingItem} updateItem={updateItem} BASE_URL={BASE_URL}></Form>
      <List data={data} deleteItem={deleteItem} editItem={editItem}></List>
    </div>
  );
}

export default App;

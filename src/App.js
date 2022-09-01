import React,{useEffect, useState} from 'react';
import "./App.css"
import Addtask from './components/Addtask';
import Header from './components/Header';
import Task from './components/Task';

const App = () => {
  const [showTask,setShowTask] = useState(false);
  const [task,setTask] = useState([])

  useEffect(() =>{
    async function getData(){
      let res = await fetchData();
      setTask(res)
    }

    getData();
  },[])

  // fetch data from server 
  async function fetchData(){
    let resp = await fetch("http://localhost:5000/tasks");
    return await resp.json();
  }

  async function fetchOneData(id){
    let res = await fetch(`http://localhost:5000/tasks/${id}`);
    return await res.json()
  }

  async function setReminder(id){
    // first method 
    // setTask(
    //   task.map(item =>{
    //     if(item.id === id){
    //       item.reminder = !item.reminder
    //     }
    //     return item
    //   })
    // );

    let data = await fetchOneData(id);
    let newData = {...data, reminder: !data.reminder}

    let res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newData)
    })

    
    // second method 
    setTask(
      task.map(item =>{
        return item.id === id ?  { ...item, reminder : !item.reminder } : item;
      })
    )
  }

  async function deleteTask(id){
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:"DELETE",
    })

    setTask(
      task.filter(item =>{
        return item.id !== id
      })
    )
  }

  function changeShowTask(){
    setShowTask(!showTask)
  }

  async function addTask(tasks){
    // let newTask = { key:Math.floor(Math.random() * 10000), ...tasks}
    // setTask([...task, newTask])
    let newTask = await fetch("http://localhost:5000/tasks",
      {
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(tasks)
      }
    )
    let data = await newTask.json()
    setTask([...task, data]);
  }

  return (
    <div className='container'>
      <Header changeShowTask={changeShowTask} showTask={showTask}/>
      {showTask ? <Addtask addTask={addTask}/> : ''}
      {task.length > 0 ? <Task task={task} setReminder={setReminder} deleteTask={deleteTask}/> : "No Task Here"}
    </div>
  );
};

export default App;
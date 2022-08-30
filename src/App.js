import React,{useState} from 'react';
import "./App.css"
import Addtask from './components/Addtask';
import Header from './components/Header';
import Task from './components/Task';

const App = () => {
  const [showTask,setShowTask] = useState(false);
  const [task,setTask] = useState([
    {
      key:Math.floor(Math.random() * 10000),
      text:"hi",
      date:"Jun 13th at 3:23am",
      reminder:false
    },
    
    {
      key:Math.floor(Math.random() * 10000),
      text:"hello",
      date:"Jun 13th at 3:23am",
      reminder:true
    },
    {
      key:Math.floor(Math.random() * 10000),
      text:"how its going nigga",
      date:"Jun 13th at 3:23am",
      reminder:false
    },
  ])

  function setReminder(key){
    // first method 
    // setTask(
    //   task.map(item =>{
    //     if(item.key === key){
    //       item.reminder = !item.reminder
    //     }
    //     return item
    //   })
    // );

    // second method 
    setTask(
      task.map(item =>{
        return item.key === key ?  { ...item, reminder : !item.reminder } : item;
      })
    )
  }

  function deleteTask(key){
    setTask(
      task.filter(item =>{
        return item.key !== key
      })
    )
  }

  function changeShowTask(){
    setShowTask(!showTask)
  }

  function addTask(tasks){
    let newTask = { key:Math.floor(Math.random() * 10000), ...tasks}
    setTask([...task, newTask])
  }

  return (
    <div className='container'>
      <Header changeShowTask={changeShowTask} showTask={showTask}/>
      {showTask ? <Addtask addTask={addTask}/> : ''}
      <Task task={task} setReminder={setReminder} deleteTask={deleteTask}/>
    </div>
  );
};

export default App;
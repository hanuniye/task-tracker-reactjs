import "../App.css"
import { useState } from "react";

const Addtask = ({addTask}) => {
  const [text,setText] = useState('');
  const [date,setDate] = useState('');
  const [reminder,setReminder] = useState(false);

  function onSubmit(e){
    e.preventDefault();
    addTask({text,date,reminder})

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="form" 
    onSubmit={onSubmit}
    >
    <div class="mb-3">
      <label for="Task" className="form-label">Task</label>
      <input type="text" className="form-control"  placeholder="Add Task"
      onChange={(e) =>{
        setText(e.target.value)
      }}
      value={text}
      />
    </div>

    <div class="mb-3">
      <label for="Day/Time" className="form-label">Day/Time</label>
      <input type="text" className="form-control"  placeholder="Add Day/Time" 
      onChange={(e) =>{
        setDate(e.target.value)
      }}
      />
    </div>

    <div className="mb-3 d-flex justify-content-between">
      <h6>Set Reminder</h6>
      <input type="checkbox" className="me-5"
      onChange={(e) =>{
        setReminder(e.target.checked)
      }}
      checked={reminder}
      />
    </div>

    <div class="mb-3">
      <input type="submit" className="form-control bg-black text-white text-center" value="Save Task" />
    </div>

    </form>
  );
};

export default Addtask;
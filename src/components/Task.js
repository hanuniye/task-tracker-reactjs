import "../App.css"

const Task = ({task,setReminder,deleteTask}) => {
  return (
    task.map((item) =>{
      return <div className={`task-cont ${item.reminder ? "reminder" : ""}`}  
      onDoubleClick={() =>{
        setReminder(item.id)
      }}>
      <div>
        <h5 style={{ textTransform:"capitalize" }}>{item.text}</h5>
        <h6 style={{ textTransform:"capitalize" }}>{item.date}</h6>
      </div>

      <i className="fa-solid fa-xmark" 
      onClick={() =>{
        deleteTask(item.id)
      }} 
      style={{ color:"red", cursor:"pointer",fontSize:"20px" }}></i>
    </div>
    })
    
  );
};

export default Task;
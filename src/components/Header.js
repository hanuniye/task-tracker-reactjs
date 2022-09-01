import "../App.css"

const Header = ({changeShowTask,showTask}) => {
  return (
    <div className='header-cont'>
      <h3>Task Tracker</h3>
      <button style={{ backgroundColor: `${showTask ? "red" : "green"}` }}
      onClick={changeShowTask}
      >{showTask ? "Close" : "Add"}</button>
    </div>
  );
};

export default Header;
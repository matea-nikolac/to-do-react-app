const DisplayTasks = ({task, tasks, checkedItems, handleCheckChange, handleTaskChange, handleEnterKey}) => {

  return (
    <div className="tasks-list">
      {tasks.map((item, index) => (
            <div className="added-task" key={index}>
              <label className='task-label' style = {{textDecoration: checkedItems[index]? 'line-through':'none'}}>
                <input 
                  type="checkbox" 
                  className="checkbox"
                  checked = {checkedItems[index]}
                  onChange = {() => handleCheckChange(index)}
                />
                {item}
              </label>
            </div>
          ))}
    </div>
  )

}

export default DisplayTasks
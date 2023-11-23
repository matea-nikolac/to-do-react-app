const DisplayTasks = ({task, tasks, checkedItems, handleCheckChange, handleTaskChange, handleEnterKey}) => {

  return (
    <>
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
              <div className="add-task-row">
                <div className="task-icon">+</div>
                <div className="add-task-input-div">
                  <input
                    className="add-task-input"
                    placeholder="List Item"
                    onChange={handleTaskChange}
                    onKeyPress={handleEnterKey}
                    value = {task}
                  />
                </div>
              </div>
    </>
  )

}

export default DisplayTasks
const DisplayTasks = ({tasks, checkedItems, handleCheckChange}) => {

  return (
    <div className="tasks-list">
      {tasks.map((item, index) => (
        !checkedItems[index])?(
          <div className="added-task" key={index}>
            <label className='task-label'>
              <input 
                type="checkbox" 
                className="checkbox"
                checked = {checkedItems[index]}
                onChange = {() => handleCheckChange(index)}
              />
              {item}
            </label>
          </div>
          )
          :
          null
          )}
    </div>
  )
}

export default DisplayTasks
const DisplayTasks = ({tasks, checkedItems, handleCheckChange}) => {

  return (
    <div className="tasks-list">
      {tasks.map((item, index) => (
        !checkedItems[index])?(
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
          )
          :
          null
          )}
    </div>
  )

}

export default DisplayTasks
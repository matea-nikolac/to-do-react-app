const AddTasks = ({handleTaskChange, handleEnterKey, task}) => {

  return (            
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
  </div>)

}

export default AddTasks
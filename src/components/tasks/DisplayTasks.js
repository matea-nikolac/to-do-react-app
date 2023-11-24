import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DisplayTasks = ({tasks, checkedItems, handleCheckChange, handleDelete}) => {

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
            <div className="task-icon" onClick={() => handleDelete(item)}>
                <FontAwesomeIcon className="delete-icon"icon={faTrash} />
            </div>
          </div>
          )
          :
          null
          )}
    </div>
  )
}

export default DisplayTasks
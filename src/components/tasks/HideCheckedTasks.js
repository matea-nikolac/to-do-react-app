import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HideCheckedTasks = ({ count, tasks, checkedItems, handleCheckChange }) => {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className='display-checked-items'>
      {count > 0 && 
        <p className="checked-tasks-p">
        You have completed {count} tasks:
        <span className="dropdown-toggle" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={showDropdown ? faChevronUp : faChevronDown} />
            </span>
        </p>}

      {showDropdown && (
          <div className="completed-tasks-dropdown">
      {tasks.map((item, index) => (
        checkedItems[index]?(
          <div className="added-task" key={index}>
            <label className='task-label' style={{color:"grey", textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                className="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckChange(index)}
              />
              {item}
            </label>
          </div>
        )
        :
        null
      ))}
      </div>
      )}
    </div>
  );
}

export default HideCheckedTasks
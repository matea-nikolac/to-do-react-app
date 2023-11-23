const HideCheckedTasks = ({ tasks, checkedItems, handleCheckChange }) => {
  return (
    <div className='display-checked-items'>
      {tasks.filter((_, i) => (checkedItems[i])).map((item, index) => {
          return (
            <div className="added-task" key={index}>
              <label className='task-label' style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => handleCheckChange(index)}
                />
                {item}
              </label>
            </div>
          );
    
      })}
    </div>
  );
}

export default HideCheckedTasks
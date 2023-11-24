import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayTasks from './tasks/DisplayTasks';
import AddTasks from './tasks/AddTasks';
import HideCheckedTasks from './tasks/HideCheckedTasks';

const Home = () => {
  const [title, setTitle] = useState('Title');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checkedItems, setCheckedItems] = useState([])
  const [count, setCount] = useState(0)

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && task.trim() !== '') {
      setTasks([...tasks, task]);
      setCheckedItems([...checkedItems, false])
      setTask('');
    }
  };

  useEffect(() => {
    const clearTaskInput = () => {
      setTask('')
    }
    clearTaskInput()
  }, [tasks])

  const handleCheckChange = (index) => {
    const checkedItemsArray = [...checkedItems]
    checkedItemsArray[index] = !checkedItemsArray[index]
    setCheckedItems(checkedItemsArray)
  }

  const handleDelete = (item) => {
    const newTaskArray = tasks.filter(task => !task.includes(item))
    setTasks(newTaskArray)
  }

  useEffect(() => {
    const countCheckedItems = () => {
      setCount(checkedItems.filter(item => item).length)
    }
    countCheckedItems()
  }, [checkedItems, tasks])

  return (
    <Container>
      <Row>
        <Col className="title" xs="12">
          <h3 className="display-4 mb-8 text-center">TO DO LIST</h3>
        </Col>
        <Col xs="12" lg="5" md="6" className="to-do-list-column mx-auto">
          <div className="to-do-list">
            <input
              className="title-input"
              placeholder={title}
              onChange={handleTitleChange}
            />
            <DisplayTasks 
              tasks = {tasks}
              checkedItems = {checkedItems}
              handleCheckChange = {handleCheckChange}
              handleDelete = {handleDelete}
            />
            <AddTasks
              handleTaskChange = {handleTaskChange}
              handleEnterKey = {handleEnterKey}
              task = {task}
            />
            <HideCheckedTasks
            count = {count}
            tasks = {tasks}
            checkedItems = {checkedItems}
            handleCheckChange = {handleCheckChange}
            handleDelete = {handleDelete}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
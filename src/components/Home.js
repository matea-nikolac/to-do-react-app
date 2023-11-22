import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';


const Home = () => {

  const [title, setTitle] = useState('Title')
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleTaskChange = (e) => {
    setTask(task)
  }

  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && e.target.value !== ''){
      const allTasks = [...tasks, task ]
      setTasks(allTasks)
      setTask('')
    }
  }

  useEffect(() => {
    const clearTaskInput = () => {
      setTask('')
    }

    clearTaskInput()
  }, [tasks])

  return (
    <Container>
      <Row>
      <Col className="title" xs="12">
        <h3 className="display-4 mb-8 text-center">TO DO LIST</h3>
      </Col>
      <Col xs="12" lg="6" className="to-do-list-column mx-auto">
        <div className="to-do-list">
          <input className='title-input' placeholder={title} onChange={handleTitleChange}/>
          <div className='tasks-list'>
          <div className='add-task-row'>
              <div className='task-icon'>+</div>
              <div className='add-task-input-div'>
                <input className='add-task-input' 
                placeholder='List Item' 
                onChange={handleTaskChange}
                onKeyPress={handleEnterKey}
                />
              </div>
            </div>
            {tasks.map((task, index) => (
              <div className='add-task-row'>
                <div className='task-icon'>+</div>
                <div className='add-task-input-div'>
                  <input 
                  className='add-task-input' 
                  placeholder='Add a task' 
                  key = {index}
                  onChange={handleTaskChange}
                  onKeyPress={handleEnterKey}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
      </Row>
    </Container>
  )
}

export default Home
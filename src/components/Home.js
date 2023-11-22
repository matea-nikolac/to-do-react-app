import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container>
      <Row>
      <Col className="title" xs="12">
        <h1 className="display-4 mb-8 text-center">TO DO LIST</h1>
      </Col>
      <Col xs="12" className="to-do-list-column">
        <div className="to-do-list text-center">
          <p>Add a task...</p>
        </div>
      </Col>
      </Row>
    </Container>
  )
}

export default Home
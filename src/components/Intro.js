import {Col, Container, Row, Button} from 'react-bootstrap'

const Intro = () => {
  return (
  <div className='intro'>
        <Container className='text-dark text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='tittle'>SINA'S FAVORITE MOVIES</div>
            <div className='introButton mt-4 text-center'>
              <Button variant='dark' href='#trending'>See All</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      )
}

export default Intro
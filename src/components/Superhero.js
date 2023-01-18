import { Card, Container, Col, Row, Image } from 'react-bootstrap'
import Venom  from '../assets/bg/img/venom.jpg'
import MoonKnight from '../assets/bg/img/moonknight.jpg'

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-white'>SUPERHERO</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrapper' id='superhero'>
            <Card className="movieImage">
              <Image src={Venom} alt="Venom" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Venom</Card.Title>
                  <Card.Text className='text-left'>
                  SERUUU BGT VENOMNYA JUGA LUCUU!! GUE JG PENGEN PELIHARA TINY VENOM.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={MoonKnight} alt="Moon Knight" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Moon Knight</Card.Title>
                  <Card.Text className='text-left'>
                  Ini series disney pertama yg bikin gue terpikat bgt. jalan ceritanya bagus, karakternya juga bagus bgt. TERUS ENDINGNYA GILA GKAAJAGHA GUE SPEECHLESS SEDIH DAN SHOCKING BGT!!
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Superhero
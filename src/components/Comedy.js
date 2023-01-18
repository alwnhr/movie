import { Card, Container, Col, Row, Image } from 'react-bootstrap'
import HomeAlone from '../assets/bg/img/homealone3.jpg'
import GravityFalls from '../assets/bg/img/gravityfalls.jpg'
import Cars from '../assets/bg/img/cars3.jpeg'

const Comedy = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-white'>COMEDY</h1>
        <br />
        <Row>
        <Col md={4} className='movieWrapper' id='comedy'>
            <Card className="movieImage">
              <Image src={HomeAlone} alt="Home Alone" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Home Alone</Card.Title>
                  <Card.Text className='text-left'>
                  SERUUU BANGEETT YG PERTAMA SM KEDUA, DUA DUANYA SERU!! cuma jadi mid pas yg ketiga dan seterusnya, kureng ih pemerannya ganti.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 10/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={GravityFalls} alt="Gravity Falls" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Gravity Falls</Card.Title>
                  <Card.Text className='text-left'>
                  DARI KECIL SAMPE SKR GRAVITY FALLS ALWAYS BE MY COMFORT SERIES!! wala kartun gitu tp sumpah ini seru bgt. tentang konspirasi2 aneh yg muncul di kota kecil bernama gravity falls.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : GABISA DIRATE INI SEMPURNA BANGET</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Cars} alt="Cars" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Cars</Card.Title>
                  <Card.Text className='text-left'>
                  I dont know, this is alwan's favorite movie, not mine jadi gue gabisa ngrate. tapi overall ini seru dan character developmentnya bagus bgt. tentang sebuah race car yg arogan dan sombong nyasar di kota bernama radiator springs yang sudah hilang dari peta.
                  </Card.Text>
                  <Card.Text className='text-center'>Kalo kata aku sih ratenya ∞/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Comedy
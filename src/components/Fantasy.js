import { Card, Container, Col, Row, Image } from 'react-bootstrap'
import MissPeregrine  from '../assets/bg/img/mp2.jpeg'
import HarryPotter from '../assets/bg/img/harrypotter.jpg'
import Encanto from '../assets/bg/img/encanto.jpeg'

const Fantasy = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-dark'>FANTASY</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrapper' id='fantasy'>
            <Card className="movieImage">
              <Image src={MissPeregrine} alt="Miss Peregrine's Home for Peculiar Children" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Miss Peregrine's Home for Peculiar Children</Card.Title>
                  <Card.Text className='text-left'>
                  MY FAVORITEE udah rewatch ini lebih dari 5 kali karna emg seseru itu. konsepnya unik, i like every character, semuanya punya role dan penokohan yang jelas. villainnya smart. ini tentang perkumpulan anak-anak yg special.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={HarryPotter} alt="Harry Potter" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Harry Potter</Card.Title>
                  <Card.Text className='text-left'>
                  Nothing could go wrong w harry potter. ada yg bilang bagusan bukunya, tapi filmnya aja udh baguusss bgt. cgi keren padahal dibikinnya udah agak lama, karakter, plot, pace, SEMUANYA PERFECT!!!
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 10000000/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Encanto} alt="Encanto" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Encanto</Card.Title>
                  <Card.Text className='text-left'>
                  Ini tentang kekeluargaan, banyak bgt yang relate sama film ini, akupun juga :' film ini menyajikan tema fantasy dimana sebuah keluarga yang tiap anggotanya memiliki kekuatan, kecuali satu anak bernama mirabel. demi apapun ini visualnya bagus bgt, detail bgt bahkan pasir pun sedetail itu.
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

export default Fantasy
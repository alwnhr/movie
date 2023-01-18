import { Card, Container, Col, Row, Image } from 'react-bootstrap'
import BlackClover from '../assets/bg/img/bc2.jpe'
import OnePiece from '../assets/bg/img/onepiece.jpg'
import Beelzebub from '../assets/bg/img/Beelzebub.jpg'

const Animeh = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-dark'>ANIMEH</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrapper' id='animeh'>
            <Card className="movieImage">
              <Image src={BlackClover} alt="Black Clover" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Black Clover</Card.Title>
                  <Card.Text className='text-left'>
                  Animationnya agak kasar tapi overall tetep bagus, pacenya oke ga kecepetan atau kelambatan, banyak karakter2 menarik yg bisa dikembangkan, ceritanya juga seru.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 8/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={OnePiece} alt="One Piece" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>One Piece</Card.Title>
                  <Card.Text className='text-left'>
                  Seruuuu, kalo nonton ini rasanya diajak masuk kedalam dunia mereka, kalian bisa tertawa, menangis, marah, hanya karna anime satu ini. TERUS KONFLIKNYA BAGUS BGT, some of them bahkan deep gitu. kurangnya adalah, ga tamat tamat :' bagi w yg tidak sabaran jadi agak hmmm.. ga begitu tertarik lagi. tentang seseorang yang mau jadi raja bajak laut.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Beelzebub} alt="Beelzebub" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center'>Beelzebub</Card.Title>
                  <Card.Text className='text-left'>
                  INISERU GILA TP UNDERATED BGT KENAPA SIH?!! BAGUS BGT tapi utk animenya w rate 7/10, karna dibanding manganya dia jauh lebih jelek. banyak part2 yg penting di potong di anime, PADAHAL ITU PART FAV AKUU!! jahat yg bikin! tentang anak remaja yg bandel disuruh ngasuh anak demon lord.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 10000/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Animeh
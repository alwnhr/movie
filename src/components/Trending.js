import { Card, Container, Col, Row, Image } from 'react-bootstrap'
import BlackClover from '../assets/bg/img/bc2.jpe'
import OnePiece from '../assets/bg/img/onepiece.jpg'
import Beelzebub from '../assets/bg/img/Beelzebub.jpg'
import HomeAlone from '../assets/bg/img/homealone3.jpg'
import GravityFalls from '../assets/bg/img/gravityfalls.jpg'
import Cars from '../assets/bg/img/cars3.jpeg'
import MissPeregrine from '../assets/bg/img/mp2.jpeg'
import HarryPotter from '../assets/bg/img/harrypotter.jpg'
import Encanto from '../assets/bg/img/encanto.jpeg'
import Venom from '../assets/bg/img/venom.jpg'
import MoonKnight from '../assets/bg/img/moonknight.jpg'

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <Row>
          <Col md={3} className='movieWrapper' id='trending'>
            <Card className="movieImage">
              <Image src={BlackClover} alt="Black Clover" className='images' />
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Black Clover</Card.Title>
                  <Card.Text className='text-left'>
                  Animationnya agak kasar tapi overall tetep bagus, pacenya oke ga kecepetan atau kelambatan, banyak karakter2 menarik yg bisa dikembangkan, ceritanya juga seru.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 8/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={HarryPotter} alt="Harry Potter" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Harry Potter</Card.Title>
                  <Card.Text className='text-left'>
                  Nothing could go wrong w harry potter. ada yg bilang bagusan bukunya, tapi filmnya aja udh baguusss bgt. cgi keren padahal dibikinnya udah agak lama, karakter, plot, pace, SEMUANYA PERFECT!!!
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 10000000/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={HomeAlone} alt="Home Alone" className='images' />
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Home Alone</Card.Title>
                  <Card.Text className='text-left'>
                  SERUUU BANGEETT YG PERTAMA SM KEDUA, DUA DUANYA SERU!! cuma jadi mid pas yg ketiga dan seterusnya, kureng ih pemerannya ganti.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 10/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={MoonKnight} alt="Moon Knight" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Moon Knight</Card.Title>
                  <Card.Text className='text-left'>
                  Ini series disney pertama yg bikin gue terpikat bgt. jalan ceritanya bagus, karakternya juga bagus bgt. TERUS ENDINGNYA GILA GKAAJAGHA GUE SPEECHLESS SEDIH DAN SHOCKING BGT!!
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={OnePiece} alt="One Piece" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>One Piece</Card.Title>
                  <Card.Text className='text-left'>
                  Seruuuu, kalo nonton ini rasanya diajak masuk kedalam dunia mereka, kalian bisa tertawa, menangis, marah, hanya karna anime satu ini. TERUS KONFLIKNYA BAGUS BGT, some of them bahkan deep gitu. kurangnya adalah, ga tamat tamat :' bagi w yg tidak sabaran jadi agak hmmm.. ga begitu tertarik lagi. tentang seseorang yang mau jadi raja bajak laut.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Beelzebub} alt="Beelzebub" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Beelzebub</Card.Title>
                  <Card.Text className='text-left'>
                  INISERU GILA TP UNDERATED BGT KENAPA SIH?!! BAGUS BGT tapi utk animenya w rate 7/10, karna dibanding manganya dia jauh lebih jelek. banyak part2 yg penting di potong di anime, PADAHAL ITU PART FAV AKUU!! jahat yg bikin! tentang anak remaja yg bandel disuruh ngasuh anak demon lord.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 10000/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Encanto} alt="Encanto" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Encanto</Card.Title>
                  <Card.Text className='text-left'>
                  Ini tentang kekeluargaan, banyak bgt yang relate sama film ini, akupun juga :' film ini menyajikan tema fantasy dimana sebuah keluarga yang tiap anggotanya memiliki kekuatan, kecuali satu anak bernama mirabel. demi apapun ini visualnya bagus bgt, detail bgt bahkan pasir pun sedetail itu.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={MissPeregrine} alt="Miss Peregrine's Home for Peculiar Children" className='images' />
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Miss Peregrine's Home for Peculiar Children</Card.Title>
                  <Card.Text className='text-left'>
                  MY FAVORITEE udah rewatch ini lebih dari 5 kali karna emg seseru itu. konsepnya unik, i like every character, semuanya punya role dan penokohan yang jelas. villainnya smart. ini tentang perkumpulan anak-anak yg special.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : 9/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Cars} alt="Cars" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Cars</Card.Title>
                  <Card.Text className='text-left'>
                  I dont know, this is alwan's favorite movie, not mine jadi gue gabisa ngrate. tapi overall ini seru dan character developmentnya bagus bgt. tentang sebuah race car yg arogan dan sombong nyasar di kota bernama radiator springs yang sudah hilang dari peta.
                  </Card.Text>
                  <Card.Text className='text-center'>Kalo kata aku sih ratenya ∞/10</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={GravityFalls} alt="Gravity Falls" className='images'/>
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Gravity Falls</Card.Title>
                  <Card.Text className='text-left'>
                  DARI KECIL SAMPE SKR GRAVITY FALLS ALWAYS BE MY COMFORT SERIES!! wala kartun gitu tp sumpah ini seru bgt. tentang konspirasi2 aneh yg muncul di kota kecil bernama gravity falls.
                  </Card.Text>
                  <Card.Text className='text-center'>Rate : GABISA DIRATE INI SEMPURNA BANGET</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={Venom} alt="Venom" className='images' />
              <div className='bg-white'>
                <div className='p-2 m-1 text-dark'>
                  <Card.Title className='text-center'>Venom</Card.Title>
                  <Card.Text className='text-left'>
                  SERUUU BGT VENOMNYA JUGA LUCUU!! GUE JG PENGEN PELIHARA TINY VENOM.
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

export default Trending
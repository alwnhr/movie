import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending';
import Animeh from './components/Animeh';
import Comedy from './components/Comedy';
import Fantasy from './components/Fantasy';
import Superhero from './components/Superhero';
import './style/landingpage.css'


function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      {/* end of intro */}

      {/*trending section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end of trending section */}

      {/* animeh section */}
      <div className='animeh'>
        <Animeh/>
      </div>
      {/* end of animeh section */}

      {/* comedy section */}
      <div className='comedy'>
        <Comedy/>
      </div>
      {/* end of comedy section */}

      {/* fantasy section */}
      <div className='fantasy'>
        <Fantasy/>
      </div>
      {/* end of fantasy section */}

      {/* superhero section */}
      <div className='superhero'>
        <Superhero/>
      </div>
      {/* end of superhero section */}
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './Components/Navigation/Navigation';
import RightSideBox from './Components/RightSideBox/RightSideBox';
import {CarouselProvider} from './Components/Context/Context.js'

function App() {
  return (
    <CarouselProvider>
      <div className="App">
        <Navigation />
        <RightSideBox />
      </div>
    </CarouselProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import RowPost from './components/rowpost/RowPost';
import {originals,action,romance,horror,crime,comedy} from './urls'

function App() {
  console.log(originals)
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix Originals' category={originals}/>
    <RowPost title='Action Movies' isSmall={true} category={action}/>
    <RowPost title='Comedy Movies' isSmall={true} category={comedy}/>
    <RowPost title='Horror Movies' isSmall={true} category={horror}/>
    <RowPost title='Romantic Movies' isSmall={true} category={romance}/>
    <RowPost title='Crime Movies' isSmall={true} category={crime}/>
    </div>
  );
}

export default App;

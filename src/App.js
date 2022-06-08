import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import request from "./request"
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>
      {/* banner */}
      <Banner/>
      
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;




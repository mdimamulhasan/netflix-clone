import "./App.css";
import Row from "./Row";
import Request from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORGINAL" fetchUrl={Request.fetchNetflixOrginals} isLargeRow={true}/>
      <Row title="Tranding now" fetchUrl={Request.fetchTrending} />
      <Row title="Top rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
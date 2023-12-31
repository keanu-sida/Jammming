import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/SearchBar';
import SearchResults from './presentational/SearchResults';

function App(props) {
  const handleSearch = (term) => {
    console.log("Searching...");
    //TODO: Make API call
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar onSearch={handleSearch}/>
        <SearchResults />
        <p>{props.name}</p>
      </header>
    </div>
  );
}

export default App;

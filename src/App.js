import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 100;
  // const link = "http://www.google.com";
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Component</h1>
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;

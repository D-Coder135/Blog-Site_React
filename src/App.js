import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 100;
  
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a>Google Site</a>
      </div>
    </div>
  );
}

export default App;

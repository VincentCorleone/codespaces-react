import React from 'react';
import './App.css';

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i} />
  }

  
  render(){
    const status = "Next player: X"
    return (
      <div>
        <div className="status">{status}</div>
        <div>
          <div>{this.renderSquare(1)}</div>
          <div>{this.renderSquare(2)}</div>
          <div>{this.renderSquare(3)}</div>
        </div>

        <div>
          <div>{this.renderSquare(4)}</div>
          <div>{this.renderSquare(5)}</div>
          <div>{this.renderSquare(6)}</div>
        </div>

        <div>
          <div>{this.renderSquare(7)}</div>
          <div>{this.renderSquare(8)}</div>
          <div>{this.renderSquare(9)}</div>
        </div>
        
      </div>
    )
  }
}

class Square extends React.Component {
  render(){
    return (
      <button>
        {this.props.value}
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
            Learn React
            <Board></Board>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DataFetchSandbox from './dataUtils/DataFetchSandbox';
import { useMessage } from "./dataUtils/customHooks";

function App() {

  const FORUM = 'nasa'

  const {
    data: messages,
    isLoading: loadingMessage,
    error: errorMessages
  } = useMessage(FORUM);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

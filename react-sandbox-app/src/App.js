import logo from './logo.svg';
import './App.css';
import DataFetchSandbox from './dataUtils/DataFetchSandbox';
import { useMessage } from "./dataUtils/customHooks";
import {useState} from "react";

function App() {

  //todo - wywalić do oddzielnego componentu użyć hooka useContext

  const [forum, setForum] = useState('nasa');

  const {
    data: messages,
    isLoading: loadingMessage,
    error: errorMessages
  } = useMessage(forum);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div>
        <button onClick={() => setForum('nasa')}>nasa</button>
        <button onClick={() => setForum('nie nasa')}>nie-nasa</button>
      </div>
          {
              errorMessages ? (
                  <div>
                      {errorMessages.message}
                  </div>
              ) : loadingMessage ? (
                  <div>
                      "Coś się wczytuje ...."
                  </div>
              ) : messages && messages.length ? (
                  <dl>
                      {messages.map((e) => (
                          <>
                            <dt>{e.author}</dt>
                              <dd>{e.text}</dd>
                          </>
                      ))}
                  </dl>
              ) : (
                  'Brak wiadomości'
              )
          }



      </header>
    </div>
  );
}

export default App;

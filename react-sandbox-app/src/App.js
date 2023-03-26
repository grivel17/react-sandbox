import logo from './logo.svg';
import './App.css';
import DataFetchSandbox from './dataUtils/DataFetchSandbox';
import { useMessage } from "./dataUtils/CustomHooks";
import {createContext, useState} from "react";
import ShowForum from "./components/ShowForum";
import {ForumContext} from "./contexts/Contexts";
function App() {

    const [forum, setForum] = useState('nasa');

    const {
    data: messages,
    isLoading: loadingMessage,
    error: errorMessages
  } = useMessage(forum);

    const [text, setText] = useState();
    const [author, setAuthor] = useState();
    const [createErrorMessages, setcreateErrorMessages] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ForumContext.Provider value={{
            author,
            setAuthor,
            forum,
            setForum,
            messages,
            loadingMessage,
            errorMessages}}>
          <ShowForum />
        </ForumContext.Provider>


      {/*    {*/}
      {/*        errorMessages ? (*/}
      {/*            <div>*/}
      {/*                {errorMessages.message}*/}
      {/*            </div>*/}
      {/*        ) : loadingMessage ? (*/}
      {/*            <div>*/}
      {/*                "Coś się wczytuje ...."*/}
      {/*            </div>*/}
      {/*        ) : messages && messages.length ? (*/}
      {/*            <dl>*/}
      {/*                {messages.map((e) => (*/}
      {/*                    <>*/}
      {/*                      <dt>{e.author}</dt>*/}
      {/*                        <dd>{e.text}</dd>*/}
      {/*                    </>*/}
      {/*                ))}*/}
      {/*            </dl>*/}
      {/*        ) : (*/}
      {/*            'Brak wiadomości'*/}
      {/*        )*/}
      {/*    }*/}



      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DataFetchSandbox from './dataUtils/DataFetchSandbox';
import { useMessage } from "./dataUtils/CustomHooks";
import {createContext, useState} from "react";
import ShowForum from "./components/ShowForum";
import {ForumContext} from "./contexts/Contexts";
function App() {

    const [forum, setForum] = useState('nasa');
    const [text, setText] = useState();
    const [author, setAuthor] = useState();
    const [createErrorMessages, setCreateErrorMessages] = useState();
    const [stateVersion, setStateVersion] = useState(0);
    // todo - count forum info and add as initial state

    const {
            data: messages,
            isLoading: loadingMessage,
            error: errorMessages
        } = useMessage(forum);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ForumContext.Provider value={{
            author,
            setAuthor,
            text,
            setText,
            forum,
            setForum,
            messages,
            loadingMessage,
            errorMessages,
            createErrorMessages,
            setCreateErrorMessages,
            setStateVersion}}>
          <ShowForum />
        </ForumContext.Provider>

      {/*todo - final cleaning add md explanation  what recipes you've made  */}
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

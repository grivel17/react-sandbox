import useMessages from './dataUtils/useMessages';
import useGetData from "./dataUtils/useGetData";
import './App.css';
import {useState} from "react";
function App() {

    const FORUM = 'nasa';
    const data = useGetData();

    const [forum, setForum] = useState(FORUM);

    const {
        data: messages,
        isLoading: loadingMessage,
        error: errorMessage
    } = useMessages(forum);

    console.log(messages);

    return <div className="App">
        MAIN PAGE
        <diV>
            <button onClick={() => setForum('nasa')}>NASA</button>
            <button onClick={() => setForum('nie-nasa')}>NIE NASA</button>
        </diV>

        <div>
            {errorMessage ? <div>{ errorMessage.message }</div> :
                loadingMessage ? <div>Wczytuję...</div> :
                messages && messages.length ?
                <dl>
                    {messages.map((v) =>
                        <>
                            <dt>{v.author}</dt>
                            <dd>{v.text}</dd>
                        </>)}
                </dl> :
                "Nic nie ma"
            }
        </div>



    </div>;
}

export default App;

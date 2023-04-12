import useMessages from './dataUtils/useMessages';
import useForum from "./dataUtils/useForum";
import useGetData from "./dataUtils/useGetData";
import { insertData } from "./dataUtils/FetchData";
import './App.css';
import {useState} from "react";
function App() {

    const FORUM = 'nasa';

    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [inputError, setInputError] = useState();



    const [forum, setForum] = useState(FORUM);


    const {
        data: messages,
        isLoading: messageLoading,
        error: messageError,
        create: createMessageFunc,
        creating: creatingMessage
    } = useForum(forum);

    console.log(messages);

    return <div className="App">
        MAIN PAGE

        <hr/>
        <div>
            <input
                type="text"
                value={author}
                placeholder="Autor"
                onChange={(e) => {setAuthor(e.target.value)}}
            />
        </div>
        <div>
            <textarea
                value={text}
                placeholder="Wiaomość"
                onChange={(e) => {setText(e.target.value)}}
                />
        </div>
        <div>
            <button
                onClick={async ()=>{
                    try {
                        await createMessageFunc({author, text});
                        setAuthor('');
                        setText('');
                    } catch (e) {setInputError(e)}
                }}
                disabled={creatingMessage || author === ''}
            >Opublikuj</button>
        </div>
        <hr/>
        <div>


            {messages.map((v) => {<div>{v.author}</div>})}
            {/*<dl>*/}
            {/*    {messages.map((value) => {*/}
            {/*        <>*/}
            {/*            <dt>{value.author}</dt>*/}
            {/*            <dd>{value.text}</dd>*/}
            {/*        </>*/}
            {/*    })}*/}
            {/*</dl>*/}
        </div>


        <diV>
            <button onClick={() => setForum('nasa')}>NASA</button>
            <button onClick={() => setForum('nie-nasa')}>NIE NASA</button>
        </diV>

        <div>
            {messageError ? <div>{ messageError.message }</div> :
                messageLoading ? <div>Wczytuję...</div> :
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

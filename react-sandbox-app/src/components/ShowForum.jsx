import React, {useContext} from 'react';
import {ForumContext} from "../contexts/Contexts";

const ShowForum = () => {

    const { forum: forumName,
            setForum: setForumName,
            messages: showMessageFromForum
    } = useContext(ForumContext);
    const handleClick = (btnType) => {
        return btnType === 'nasaBtn' ? setForumName('nasa') : setForumName('nie-nasa');
    };

    return (

        <div>
            <h1>
                {`And the forum name is ${forumName}`}
            </h1>
            <div>
                {'Forum Content Here'}
                <dl>
                {
                    showMessageFromForum.map((item) => (
                        <>
                            <dt>{item.author}</dt>
                            <dd>{item.text}</dd>
                        </>
                    ))
                }
                </dl>
            </div>
            <div>
                <button onClick={() => handleClick('nasaBtn')}>nasa</button>
                <button onClick={() => handleClick('nieNasaBtn')}>nie-nasa</button>
            </div>
        </div>
    );
};

export default ShowForum;
import React, {useContext} from 'react';
import {ForumContext} from "../contexts/Contexts";

const AddInfoToForum = () => {

    const { forum: forumNameForForm,
            author: forumAuthor,
            setAuthor: setForumAuthor,
            text: forumText,
            setText: setForumText,
            createErrorMessages,
            setCreateErrorMessages
    } = useContext(ForumContext);

    const onChangeHandler = (e, setType) => {
        setType(e.target.value)
    }
    console.log(forumAuthor);
    return (

        <>
            <h3>Dodaj użytkownika i wpis na forum</h3>
            <div>
                <input
                    type="text"
                    value={forumAuthor}
                    placeholder="Autor"
                    onChange={(e) => {onChangeHandler(e, setForumAuthor)}}
                />
                <div>
                <textarea
                    value={forumText}
                    placeholder="Wiadomość"
                    onChange={(e) => {setForumText(e.target.value)}}
                />
                </div>

            </div>
            <button
                onClick={async () => {
                    try {
                        await ['kod do przesyłania wiadomości na serwer']
                        setForumText('')
                        setForumAuthor('')
                    } catch (e) {
                        setCreateErrorMessages(e);
                    }
                }}
            >
                Opublikuj
            </button>
        </>
    );
};

export default AddInfoToForum;
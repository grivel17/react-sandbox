import React, {useContext} from 'react';
import {ForumContext} from "../contexts/Contexts";

const AddInfoToForum = () => {

    const { forum: forumNameForForm,
            author: forumAuthor,
            setAuthor: setForumAuthor
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

            </div>
        </>
    );
};

export default AddInfoToForum;
import React, {useContext} from 'react';
import {ForumContext} from "../contexts/Contexts";

const AddInfoToForum = () => {

    const { forum: forumNameForForm } = useContext(ForumContext);

    return (
        <div>
            { `Formularz i test useContext ${forumNameForForm} `}
        </div>
    );
};

export default AddInfoToForum;
import {useCallback, useEffect, useState} from "react";

const useForum = (forum) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const [creating, setCreating] = useState(false);
    const [stateVersion, setStateVersion] = useState(0);

    const create = useCallback(
        async (message) => {
        try {
            setCreating(true);
            const res = await fetch(`/messages/${forum}`, {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'}})
            if(!res.ok) {
                const text = await res.text()
                throw new Error(`Nie udało się załadować danych dla forum ${forum}, ${text}`)
            }
            setStateVersion((prevState) => prevState +1);
        } finally {
            setCreating(false);
        }
    }, [forum]);


    useEffect(() => {
        let didCancel = false;
        setError(null);
        if (forum){
            ;(async () => {
                try {
                    setIsLoading(true);
                    const res = await fetch(`/messages/${forum}`);
                    if(!res.ok) {
                        const text = await res.text();
                        throw new Error(`Nie udało się pobrać forum ${forum}, ${text}`)
                    }
                    const data = await res.json();
                    if(!didCancel) {
                        setData(data)
                    }
                } catch (e) {
                    setError(e);
                } finally {
                    setIsLoading(false);
                }
            })()

        } else {
            setData([]);
            setIsLoading(false);
        }
        return () => {
            didCancel = true;
        }
    }, [forum, stateVersion]);

    return {data, isLoading, error, creating, create};
}

export default useForum;
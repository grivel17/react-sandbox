import {useEffect, useState} from "react";
const useMessages = (forum) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        let didCancel = false;
        setError(null);
        if(forum) {
            ;(async () => {
                try {
                    setIsLoading(true);
                    const res = await fetch(`messages/${forum}`);
                    if (!res.ok) {
                        const resText = await res.text();
                        throw new Error(`Cant upload data from forum ${forum} cause ${resText}`)
                    }
                    const body = await res.json();
                    if (!didCancel) {
                        setData(body);
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
    }, [forum])
    return {data, isLoading, error};
}
export default useMessages;
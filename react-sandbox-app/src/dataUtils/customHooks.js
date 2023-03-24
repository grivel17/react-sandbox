import {useEffect, useState} from "react";
export const useMessage = (forum) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        let didCancel = false;
        setError(null);
        if (forum) {
          ;(async () =>
                {
                    try {
                        setIsLoading(true);
                        const res = await fetch(`/messages/${forum}`)
                        console.log("fetch sukces");
                        if(!res.ok) {
                            const textError = await res.text();
                            throw new Error(`Nie można wczytać wiadomości dla ${forum} ${textError}`)
                        }
                        const body = await res.json();
                        if(!didCancel) {
                            setData(body);
                            console.log("body sukces");
                        }
                    } catch (e) {
                        setError(e);
                    } finally {
                        setIsLoading(false);
                    }
                }) ()
        } else {
            setData([]);
            setIsLoading(false);
        }
        return () => { didCancel = true }
    }, [forum]);

    console.log(data, isLoading, error);
    return {data, isLoading, error};
};

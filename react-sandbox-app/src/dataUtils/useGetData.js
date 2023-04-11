import {useEffect, useState} from "react";

export default function useGetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/messages/nasa');
            const fetchedData = await res.json()
            setData(fetchedData);
        }
        fetchData();
    }, []);

    return data;
};
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url).then(res => {
                if(!res.ok) {
                    throw Error('Could Not Fetch The Data For That Response!');
                }
            return res.json();
        }).then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
        }).catch(error => {
            // console.log(error.message);
            setError(error.message);
            setIsLoading(false);
        })
        }, 1000);
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;
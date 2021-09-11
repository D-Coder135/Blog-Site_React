import { useState, useEffect } from "react";

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs').then(res => {
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
    }, []);

    return {data, isLoading, error}
}

export default useFetch;
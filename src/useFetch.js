const useFetch = () => {
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs').then(res => {
                if(!res.ok) {
                    throw Error('Could Not Fetch The Data For That Response!');
                }
            return res.json();
        }).then(data => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
        }).catch(error => {
            // console.log(error.message);
            setError(error.message);
            setIsLoading(false);
        })
        }, 1000);
    }, []);
}
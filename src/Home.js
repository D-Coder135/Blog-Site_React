import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

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
        }).catch(error => {
            console.log(error.message);
        })
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {isLoading && <div>loading..</div>}
            {blogs && <BlogList blogs = { blogs } title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;
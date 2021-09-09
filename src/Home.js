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
            return res.json();
        }).then(data => {
            setBlogs(data);
            setIsLoading(false);
        });
        });
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
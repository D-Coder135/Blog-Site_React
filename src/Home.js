import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs';)

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            {/* <h2>Homepage</h2> */}
            {isLoading && <div>loading..</div>}
            {blogs && <BlogList blogs = { blogs } title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;
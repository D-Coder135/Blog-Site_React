import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos, hic, laudantium, cumque odit maxime quo facere quis sapiente impedit harum! Eos est labore sunt quos laborum minus illum ducimus.', author: 'Devansh', id: 1},
        {title: 'Welcome Party!', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos, hic, laudantium, cumque odit maxime quo facere quis sapiente impedit harum! Eos est labore sunt quos laborum minus illum ducimus.', author: 'Matilda', id: 2},
        {title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos, hic, laudantium, cumque odit maxime quo facere quis sapiente impedit harum! Eos est labore sunt quos laborum minus illum ducimus.', author: 'John', id: 1},
    ]);

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            <BlogList />
        </div>
     );
}
 
export default Home;
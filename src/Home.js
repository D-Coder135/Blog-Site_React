import { useState } from "react";

const Home = () => {

    const[name, setName] = useState('Devansh');

    const handleClick = () => {
        // console.log('hello ninjas');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
import { useState } from "react";

const Home = () => {

    const[name, setName] = useState('Devansh');
    const[age, setAge] = useState(21);

    const handleClick = () => {
        setName('Harshit');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
import { useState } from "react";

const Home = () => {

    const[name, setName] = useState('Devansh');
    const[age, setAge] = useState(21);

    const handleClick = () => {
        setName('Harshit');
        setAge(51);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick = {handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
import {useState} from 'react'

function YourName({ setName }){
   // const [name, setName] = useState
    
    return (
    <div>
        <p>Type your name: </p>
        <input type="text" placeholder="Name here!"
        onChange={(e) => setName(e.target.value)}
        />
    </div>
    )
}

export default YourName
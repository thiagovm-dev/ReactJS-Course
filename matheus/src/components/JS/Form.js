import { useState } from 'react'


function Form(){ 
    
    function registerUser(e){
        e.preventDefault()
        console.log(`User ${name} was registered with a password ${password}`)
        //console.log("Successfully registered user!")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>My Register</h1>
            <form onSubmit={registerUser}>

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Type your name here"
                onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Type your password here"
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <input type="submit" value="Register Now" />
            </div>
               
        </form>
        </div>
    )
}

export default Form
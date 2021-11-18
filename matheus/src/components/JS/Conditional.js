import { useState } from "react";

function Conditional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function sendMail(e){
        e.preventDefault()
        setUserEmail(email)
        
    }

    function clearEmail(){
        setUserEmail('')
        console.log(userEmail)
    }


    return (
        <div>
            <h2>Register your e-mail:</h2>
            <form>
                <input type="email" placeholder="Type your e-mail here..."
                onChange={(e) => setEmail(e.target.value)} />
                
                <button type="submit" onClick={sendMail}>Send e-mail now!</button>
                {userEmail && (
                    <div>
                        <p>The e-mail user is {userEmail}</p>
                        <button onClick={clearEmail}>Clean e-mail</button>
                    </div>
                )}
            </form>
        </div>

    )
}

export default Conditional
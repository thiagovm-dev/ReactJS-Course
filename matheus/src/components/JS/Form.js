
function Form(){
    
    function registerUser(e){
        e.preventDefault()
        console.log("Successfully registered user!")
    }

    return(
        <form onSubmit={registerUser}>
            <div>
                <input type="text" placeholder="Type your name here" />
            </div>
            <div>
                <input type="submit" value ="Register Now" />
            </div>
        </form>
    )
}

export default Form
import Button from "./events/Button"

 
 function Events(){
    function MyEvent(){
        alert(`I was clicked!`)
        console.log(`Activating first event!`)
    }

    function secondEvent(){
        console.log("Activating second event!")
    }

     return(
        <div>
            <p>Click to shoot an Event:</p>
            <Button event={MyEvent} text="First Event" />
            <Button event={secondEvent} text="Second Event" />
          
        </div>
     )
 }
 export default Events
 
 function Events({number}){
    function MyEvent(){
        alert(`I was clicked! ${number}`)
        console.log(`I was clicked here too in console TVM! ${number}`)
    }



     return(
         <div>
        <p>Clique to shoot an Event:</p>
        <button onClick={MyEvent}>Click here tvm!</button>
        </div>
     )
 }
 export default Events

function Grettings({ name }){
    function makeGretting(anyName){
        return `Hi ${anyName}, how are you?`
    }

return <>{name && <p>{makeGretting(name)}</p>}</>
}


export default Grettings
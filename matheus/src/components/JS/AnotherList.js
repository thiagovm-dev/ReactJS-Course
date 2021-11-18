

function AnotherList({items}){
    return (
        <>
     
        <h2>Good Items: </h2>
        {items.length > 0 ? (
        items.map((item, index) => 
        <p key={index}>{item}</p>)
        ) : (
            <p>Not there items!</p>
        )}
        </>
     
    )
}

export default AnotherList
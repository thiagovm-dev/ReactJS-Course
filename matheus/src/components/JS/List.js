import Item from './Item'

function List(){
    return(
        <>
        <h1>My List</h1>
        <ul>
            <Item brand="Ferrari" year={1984} />
            <Item brand="Fiat" year={1664} />
            <Item brand="VW" year={2000}/>
            <Item />
            <Item />
           
            
            
        </ul>
        </>
    )
}

export default List
import PropTypes from 'prop-types' 
 
 
 function Item({brand, year}){
     return(
         <>
         <li>{brand} - {year}</li>
         </>
     )
 }

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
}
Item.defaultProps = {
    brand: 'No brand selected',
    year: 0,
}

 export default Item
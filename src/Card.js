import React from "react"
import PropTypes from "prop-types"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".

Card.propTypes = {
    cardColor: PropTypes.oneOf(["green", "purple", "red", "blue"]).isRequired,
    height: PropTypes.number.isRequired
}

Card.defaultProps = {
    height: 100,
    width: 100,
    cardColor: "blue"
}

export default Card

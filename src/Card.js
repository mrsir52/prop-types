//This is an example of using proptypes and default props

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

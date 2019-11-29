import React from "react"
import PropTypes from "prop-types"


function RoundedImg(props) {
    return (
        <img 
            src={props.src} 
            style={{borderRadius: props.borderRadius}} 
            className="round-img"
        />
    )
}

RoundedImg.propTypes = {
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

RoundedImg.defaultProps = {
    borderRadius: "50%",
    src: "https://picsum.photos/id/237/300/300"
}

export default RoundedImg
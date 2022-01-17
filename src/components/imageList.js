import React from "react";

const imageList = (props) => {
    const images = props.images.map( (image) => {
        return <img src={ image.webformatURL} alt="image" />
    })

    return(
        <div>
            {images}
        </div>
    )
}

export default imageList;
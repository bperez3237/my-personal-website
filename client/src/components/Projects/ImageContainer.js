import React, {useState} from 'react'

function ImageContainer({images}) {
    const [imagesIndex, setImagesIndex] = useState(0)

    console.log(imagesIndex)
    function changeIndex(changeNumber) {
        let newIndex = imagesIndex + changeNumber
        if (newIndex < 0) {
            newIndex = images.length - 1
        } else if (newIndex >= images.length) {
            newIndex = 0
        }
        setImagesIndex(newIndex)
    }

    return (
        <div className='Image-Container'>
            <img id='project-image' src={images[imagesIndex]} alt={`project-image-${imagesIndex}`} />
            <div className='image-buttons'>
                <button id='left' onClick={()=>changeIndex(-1)}>Left</button>
                <button id='right' onClick={()=>changeIndex(1)}>Right</button>
            </div>
        </div>
    )
}

export default ImageContainer
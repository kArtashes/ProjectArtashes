import { useState } from "react"
import "./carousel.css"

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const items = ['https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 
    'https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280', 
    'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
]


    const prevSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === 0 ? items.length - 1 : prevSlide - 1)
    }
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === items.length - 1 ? 0 : prevSlide + 1 )
    }
    return (
        <div className="carousel">
            <div onClick={prevSlide} className="prev-button">
                
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item} alt="" />
                
                </div>
            ))}
            <div onClick={nextSlide} className="next-button">
                
            </div>
        </div>
    )
}
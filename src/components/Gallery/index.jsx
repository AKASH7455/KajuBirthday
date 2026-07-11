import image1 from '../../assets/image1.jpg.png'
import image2 from '../../assets/image2.jpg.png'
import image3 from '../../assets/image3.jpg.png'
import image4 from '../../assets/image4.jpg.png'
import image5 from '../../assets/image5.jpg.png'
import image6 from '../../assets/image6.jpg (1).jpg'
import './Gallery.css'

export default function Gallery() {
  const images = [
    { src: image1, alt: 'Memory 1' },
    { src: image2, alt: 'Memory 2' },
    { src: image3, alt: 'Memory 3' },
    { src: image4, alt: 'Memory 4' },
    { src: image5, alt: 'Memory 5' },
    { src: image6, alt: 'Memory 6' }
  ]

  return (
    <section className="gallery">
      <h2>Memory Gallery</h2>
      <div className="grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

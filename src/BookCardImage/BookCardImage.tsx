import './BookCardImage.css'

const BookCardImage = (genre: string) => {
  if (genre === "") {
    return `/src/assets/images/unknown.png`
  } else {
    return `/src/assets/images/${genre.toLowerCase()}.png`
  }
}
export default BookCardImage
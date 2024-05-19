import BookSHow from "./BookSHow"
const BookList = ({ booksData, onDelete, onEdit }) => {
    const renderBooks = booksData.map((book) => {
        return <BookSHow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    })
    return (
        <div className="book-list">
            {renderBooks}
        </div>
    )
}
export default BookList;
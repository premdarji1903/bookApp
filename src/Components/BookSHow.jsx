import { useState } from "react";
import BookEdit from './BookEdit'
const BookSHow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        console.log(`id-->`, book._id);
        onDelete(book._id);
    }
    const handleEditCLick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit books={book} onHandleSubmit={handleSubmit} />
    }
    return (
        <div className="book-show">
            <div>{content}  </div>
            <div className="actions">
                <button className="edit" onClick={handleEditCLick}>edit </button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )

}
export default BookSHow;    
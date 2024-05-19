import { useState } from "react";

const BookEdit = ({ books, onHandleSubmit }) => {
    const [title, setTitle] = useState(books.title)
    const handleChange = (event) => {

        setTitle(event.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onHandleSubmit(books._id, title)
        console.log("new title-->", title);
        alert("title updated successfully")
    }
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>{title}</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="butoon is-primary"> Save </button>
        </form>
    )
}
export default BookEdit;
import { useState } from "react";

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState("");
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title)
        setTitle("")
    }
    return (
        <div className="book-create">
            <h2> Add new Book </h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" value={title} onChange={handleChange} />
                <button className="button">Create </button>
            </form>
        </div>
    )
}
export default BookCreate;
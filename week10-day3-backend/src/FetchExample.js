import React, { Component } from 'react';

class FetchExample extends Component {
    constructor() {
        super();
        this.state = { books: [], book: { id: '', title: '', author: '', rating: '', year_published: '' } };
    }

    componentDidMount = async () => {
        this.update();
    }

    update = async () => {
        const jsonData = await fetch("http://localhost:4000/books");
        const data = await jsonData.json();
        console.log(data);
        this.setState({ books: data });
        this.setState({book: { id: '', title: '', author: '', rating: '', year_published: '' }});
    }

    deleteBook = async (event) => {
        const id = event.target.id;
        await fetch("http://localhost:4000/books/" + id, { method: 'delete' });
        this.update();

    }

    editBook = async (book) => {
        this.setState({ book: book });
    }

    handleChange = (event) => {
        const id = event.target.id;
        const book = this.state.book;
        id === 'title' && (book.title = event.target.value);
        id === 'author' && (book.author = event.target.value);
        id === 'rating' && (book.rating = event.target.value);
        id === 'year_published' && (book.year_published = event.target.value);

        this.setState({ book });
    }

    submitForm = async (event) => {
        event.preventDefault();
        const book = this.state.book;

        if (book.id === '') {
            this.submitNewBook(book);
        }
        else {
            this.submitEdit(book);
        }
    }

    submitNewBook = async (book) => {
        await fetch("http://localhost:4000/books", {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        this.update();
    }

    submitEdit = async (book) => {
        await fetch("http://localhost:4000/books/" + book.id, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        this.update();
    }

    //componentDidMount = () => {
    //  fetch("http://localhost:4000/books")
    //    .then((response) => {
    //      return response.json();
    //})
    //.then((json) => {
    //  console.log(json);
    //let books = JSON.stringify(json);
    //this.setState({books: books});
    //console.log(books);
    //})
    //}

    render() {



        return <ul>{this.state.books.map((book) => <li key={book.id}>{book.title}
            <button id={book.id} onClick={this.deleteBook}>Delete</button>
            <button id={book.id} onClick={() => { this.editBook(book) }}>Edit</button>
        </li>)}
            <form onSubmit={this.submitForm}>
                Title:<input id="title" type="text" value={this.state.book.title} onChange={this.handleChange} /><br></br>
                Author:<input id="author" type="text" value={this.state.book.author} onChange={this.handleChange} /><br></br>
                Rating:<input id="rating" type="text" value={this.state.book.rating} onChange={this.handleChange} /><br></br>
                Year published:<input id="year_published" type="text" value={this.state.book.year_published} onChange={this.handleChange} /><br></br>
                <input type="submit" value="Submit" />
            </form>
        </ul>
    }
}

export default FetchExample;
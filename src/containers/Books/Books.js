import React, { Component } from "react";
import AddBook from "./AddBook/AddBook";
import axios from "axios";
import ModifyBook from "./ModifyBook/ModifyBook";

class Books extends Component {

    state = {
        books: [],
        bookToModify: 1
    }

    componentDidMount = () => {
        const books = [];
        axios.get("https://personnage-f8150-default-rtdb.europe-west1.firebasedatabase.app/books.json")
            .then(response => {
                // console.log(response.data);
                Object.entries(response.data).forEach(([key, book]) => {
                    //console.log(book);
                    books.push(book);
                })
                this.setState({books: books});
            })
            .catch(error => {
                console.log(error);
            })
    }

    addBookHandler = (book) => {
        console.log("Nom du livre à ajouter : " + book.name);
        const books = [...this.state.books];
        const id = Math.max(...books.map(b => b.id), 0) + 1;
        book.id = id;
        axios.post("https://personnage-f8150-default-rtdb.europe-west1.firebasedatabase.app/books.json", book)
            .then(response => {
                console.log(response);
                books.push(book);
                this.setState({books: books});
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteBookHandler = (id) => {
        console.log("Supprimer le livre : " + id);
        const index = this.state.books.findIndex(book => {
            return book.id === id
        });
        console.log("index du livre : " + index)
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({books: books})
    }

    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Année</th>
                            <th>Prix</th>
                            <th>Pays</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.books.map( book => {
                            if(book.id !== this.state.bookToModify) {
                                return (
                                    <tr key={book.id}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.year}</td>
                                        <td>{book.price}</td>
                                        <td>{book.country}</td>
                                        <td><button className="btn btn-primary">Modifier</button></td>
                                        <td><button onClick={() => this.deleteBookHandler(book.id)} className="btn btn-danger">Supprimer</button></td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={book.id}>
                                        <ModifyBook {...book} />
                                    </tr>
                                )
                            }
                            
                        })
                    }
                    </tbody>
                </table>
                <AddBook addBookAction={(book) => this.addBookHandler(book)} />
            </>
        )
    }
}

export default Books;
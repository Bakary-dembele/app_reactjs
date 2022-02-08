import React, { Component } from "react";

class ModifyBook extends Component {

    state = {
        book: {
            id: "",
            name: "",
            author: "",
            year: "",
            price: "",
            country: ""
        }
    }

    componentDidMount = () => {
        this.setState({book: {
            id: this.props.id,
            name: this.props.name,
            author: this.props.author,
            year: this.props.year,
            price: this.props.price,
            country: this.props.country
        }})
        // this.setState({book: {...this.props}})
    }

    handleSubmit = () => {
        this.props.modifyBook(this.state.book);
    }

    render() {
        console.log(this.props)
        return (
            <>
                <td>
                    <input className="form-control text-center" type="text" id="name" name="name"
                    value={this.state.book.name}
                    onChange={(event) => this.setState(oldState => ({
                        book: {
                            ...oldState.book,
                            name: event.target.value
                        }
                    }))}
                     />
                </td>
                <td>
                    <input className="form-control text-center" type="text" id="author" name="author"
                    value={this.state.book.author}
                    onChange={(event) => this.setState(oldState => ({
                        book: {
                            ...oldState.book,
                            author: event.target.value
                        }
                    }))}
                     />
                </td>
                <td>
                    <input className="form-control text-center" type="number" id="year" name="year"
                    value={this.state.book.year}
                    onChange={(event) => this.setState(oldState => ({
                        book: {
                            ...oldState.book,
                            year: event.target.value
                        }
                    }))}
                     />
                </td>
                <td>
                    <input className="form-control text-center" type="number" id="price" name="price"
                    value={this.state.book.price}
                    onChange={(event) => this.setState(oldState => ({
                        book: {
                            ...oldState.book,
                            price: event.target.value
                        }
                    }))}
                     />
                </td>
                <td>
                    <input className="form-control text-center" type="text" id="country" name="country"
                    value={this.state.book.country}
                    onChange={(event) => this.setState(oldState => ({
                        book: {
                            ...oldState.book,
                            country: event.target.value
                        }
                    }))}
                     />
                </td>
                <td colSpan="2">
                    <button onClick={this.handleSubmit} className="btn btn-success">Enregistrer</button>
                </td>
            </>
        );
    }
}

export default ModifyBook;
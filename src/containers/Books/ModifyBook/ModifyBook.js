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

    render() {
        console.log(this.props)
        return (
            <>

            </>
        );
    }
}

export default ModifyBook;
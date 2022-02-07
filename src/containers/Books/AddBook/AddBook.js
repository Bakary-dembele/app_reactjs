import React, { Component } from "react";
import {withFormik} from "formik";
import * as Yup from "yup";

class AddBook extends Component {

    render() {
        return (
            <>
                <h2 className="text-center" style={{fontFamily: 'Quintessential'}}>Ajouter un livre</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom :</label>
                        <input type="text" className="form-control" id="name" name="name"
                        value={this.props.values.name}
                        onChange={this.props.handleChange}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Auteur :</label>
                        <input type="text" className="form-control" id="author" name="author"
                        value={this.props.values.author}
                        onChange={this.props.handleChange}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Année :</label>
                        <input type="number" className="form-control" id="year" name="year"
                        value={this.props.values.year}
                        onChange={this.props.handleChange}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Prix :</label>
                        <input type="number" className="form-control" id="price" name="price"
                        value={this.props.values.price}
                        onChange={this.props.handleChange}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Pays :</label>
                        <input type="text" className="form-control" id="country" name="country"
                        value={this.props.values.country}
                        onChange={this.props.handleChange}
                         />
                    </div>
                    <button type="submit" className="btn btn-primary"
                    onClick={this.props.handleSubmit}>Ajouter</button>
                </form>
            </>
        );
    }
}

export default withFormik({
    mapPropsToValues : () => ({
        name: "",
        author: "",
        year: "",
        price: "",
        country: "",
    }),
    validationSchema : Yup.object().shape({
        name: Yup.string()
                    .min(5, "Le nom du livre doit comporter au moins 5 caractères")
                    .max(15, "Le nom du livre doit comporter au maximum 15 caractères")
                    .required(),
        author: Yup.string()
                    .required("Le nom de l'auteur est requis"),
        price: Yup.number()
                    .required("Le prix est requis"),
        year: Yup.number()
                    .moreThan(1900, "L'année doit être supérieure à 1900")
                    .required("L'année  est requise"),
        country: Yup.string()
                    .required("Le nom du pays est requis")
        
    }),
    handleSubmit: (values, {props}) => {
        //console.log(values);
        props.addBookAction(values);
    }
}) (AddBook);
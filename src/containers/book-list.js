import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class Booklist extends Component {
    
    renderList() {
        return  this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    };
    
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

}

// Définir la conection entre les données
function mapStateToProps(state) {
    //le retour de cette focntion défini this.props dans booklist
    return {
        books : state.books
    }
}

// Cette fonction permet de faire en sorte que lorsque selectBook est appelé, tous les reducers sont notifié du changement
function mapDispatchToProps(dispatch) {
    // Ce qui est passé en premier argument devient disponible dans props
   return bindActionCreators({ selectBook : selectBook }, dispatch);
}

// promeu bookList de component à container
// donne accès à state.books et selectBook
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
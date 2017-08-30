import React, {Component} from 'react';
import { connect } from 'react-redux';

class Booklist extends Component {
    
    renderList() {
        return  this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
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

export default connect(mapStateToProps)(Booklist);
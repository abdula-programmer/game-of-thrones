import React, { Component } from "react";
import GotService from "../../services/GotService";
import ItemDetails, { Field } from "../charDetails/ItemDetails";

export default class BooksItem extends Component {
    
    gotService = new GotService();

    state = { 
      selectedBook: 3
    }
  


  render() {
    return (
      <ItemDetails  
        itemId={this.props.bookId}
        gotData={this.gotService.getBook}    
      >
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="Number of pages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
  }
}

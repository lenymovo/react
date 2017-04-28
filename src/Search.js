import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props){
    super(props)
    this.state = { searchText: '' }
  }

  searchTag(e){
    e.preventDefault();
    this.props.onSearchTag(this.searchInput.value);
  }

  console(e){
    this.setState({ searchText: e.target.value });
  }

  render(){

    return (<form onSubmit={ this.searchTag.bind(this) }>
      <input
        type='text'
        placeholder='введите текст'
        value={ this.state.searchText }
        ref={(input) => { this.searchInput = input }}
        onChange={ this.console.bind(this) } />
      </form>
    )
  }
};

export default connect(
  store => ({ filterSearch: store.search, store: store}),
  dispatch => ({ onSearchTag: (search) => dispatch({ type: 'SEARCH', search: search }) }),
)(Search);

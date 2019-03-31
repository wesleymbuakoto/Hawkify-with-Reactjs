import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'
        />
        <button type="button" className="btn btn-danger" 
        onClick={this.searchArtist}>Search<img src="https://img.icons8.com/android/24/000000/search.png" alt="Magnifine glass icon"></img></button>
      </div>
    )
  }
}

export default Search;

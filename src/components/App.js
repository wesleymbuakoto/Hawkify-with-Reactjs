import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artist: null, tracks: [] };

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-light bg-light">
          <a class="navbar-brand" id="appName" href="#">Hawkify</a>
          <Search searchArtist={this.searchArtist} />
        </nav>
        <div>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
        </div>
      </div>
    );
  }
}

export default App;
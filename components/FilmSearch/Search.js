import React, { Component } from "react";
import { ActivityIndicator, View, TextInput, Button } from "react-native";

import FilmList from "../FilmList/FilmList";
import { getFilmsFromApiWithSearchedText } from "../../API/TMDBApi";
import styles from './styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.page = 0;
    this.totalPages = 0;
    this.state = {
      films: [],
      isLoading: false
    };
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _loadFilms = () => {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true });
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
        data => {
          this.page = data.page;
          this.totalPages = data.total_pages;
          this.setState({
            films: [...this.state.films, ...data.results],
            isLoading: false
          });
        }
      );
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  _searchFilms() {
    this.page = 0;
    this.totalPages = 0;
    this.setState({
        films: []
      },() => {
        this._loadFilms();
      }
    );
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={text => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title="Rechercher" onPress={() => this._searchFilms()} />
        <FilmList 
          films={this.state.films} 
          navigation={this.props.navigation}
          _loadFilms={this._loadFilms}
          page={this.page}
          totalPages={this.totalPages}
        />
        {this._displayLoading()}
      </View>
    );
  }
}

export default Search;

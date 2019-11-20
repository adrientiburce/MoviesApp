import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";

import FilmItem from "./FilmItem";
import { connect } from "react-redux";

class FilmList extends Component {
  constructor(props) {
    super(props);
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm });
  };

  _isFilmFavorite = idFilm => {
    return (
      this.props.favoritesFilm.findIndex(item => item.id === idFilm) !== -1
    );
  };

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.films}
        extra={this.props.favoritesFilm}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <FilmItem
            film={item}
            displayDetailForFilm={this._displayDetailForFilm}
            isFilmFavorite={this._isFilmFavorite(item.id)}
          />
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (this.props.page < this.props.totalPages) {
            this.props._loadFilms();
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  };
};

export default connect(mapStateToProps)(FilmList);

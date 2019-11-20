import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import FilmList from "../FilmList/FilmList";
import { connect } from "react-redux";

class Favorites extends Component {

  render() {
    return (
      <View style={styles.main_container}>
        {(this.props.favoritesFilm.length > 0 && (
          <FilmList
            films={this.props.favoritesFilm}
            navigation={this.props.navigation}
            page={1}
            totalPages={1}
          />
        )) || <Text style={styles.text}>Vous n'avez auncun film favoris</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  text: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    fontSize: 25,
    color: "darkgrey",
    alignItems: "center",
    justifyContent: "center"
  }
});


const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  };
};

export default connect(mapStateToProps)(Favorites);

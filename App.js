import React from "react";
import {StyleSheet, View} from "react-native";
import {Provider} from 'react-redux';

import Navigation from "./navigation/Navigation";

export default class App extends React.Component {
    render() {
        return (
            <Navigation/>
        )
    }
}

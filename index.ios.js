/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
    App = require("./components/app");

var {AppRegistry} = React;

// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   NavigatorIOS,
// } = React;


// var HackerNewsApp = React.createClass({
//   render: function() {
//     return (
//      <NavigatorIOS
//         style = {styles.container}
//         initialRoute={{
//           title: "Front Page",
//           component: FrontPage
//         }}
//         barTintColor="#F07530"
//         titleTextColor="#fff"
//       />
//     );
//   }
// });


// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F6F6EF"
//   }
// });



AppRegistry.registerComponent('rn_hn', () => App);

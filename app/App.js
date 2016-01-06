// create an App component for our application
// render it to the DOM
// add 3 links with the following hrefs: '#/', '#/about', '#/contact'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute} from 'react-router';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

const App = React.createClass({
  render(){
    return (
      <div>
      <div>Hello</div>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
      {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router>
    <Route component={ App } path="/">
        <IndexRoute component={ Home }/>
        <Route path="about/:name" component={ About }/>
        <Route path="contact" component={ Contact }/>
    </Route>
  </Router>, document.getElementById('app'))
// create 3 new components, each in it's own file: Home, About, and Contact
// have each of them return the following jsx, respectively: `<div>Home</div>`
// export them so they can be used in other files
// include each of the new components into this App.js file



////////////////////////////////////
// BREAK
////////////////////////////////////


// run `npm install history@1.13.1 react-router@latest --save` to bring in react-router to our project
// include Router, Route, and Link from the react-router module

// replace the <a> tags with <Link> tags
// remove any logic related to keeping track of the current route (componentDidMount, getInitialState, etc)
// replace <Child /> with {this.props.children}
// create react-router routes by replacing <App /> in ReactDOM.render with the following:
// <Router>
//   <Route component={App} path='/'>
//     <Route component={Home} path='home' />
//     <Route component={About} path='about' />
//     <Route component={Content} path='content' />
//   </Route>
// </Router>

// include IndexRoute from the react-router module
// replace the Home route with <IndexRoute />

// update our `About` route to accept a `name` parameter, which we'll display on the about page
// move to the `About` component file, and update the render method to display the route prop (this.props.params.name)


////////////////////////////////////
// BREAK
////////////////////////////////////


////////////////////////////////////
// QUESTIONS / REQUESTS / PROJECT
////////////////////////////////////

// https://github.com/ReactWeek/mini3-todofire

import React from 'react'

const About = React.createClass({
  render(){
    return(
      <div>ABOUT {this.props.params.name}</div>
    )
  }
})

export default About

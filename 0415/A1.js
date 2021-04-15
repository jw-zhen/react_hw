import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {color:'red'};
    }
    render(){
        return <h2>I am a{this.state.color} {this.props.brand} Car</h2>
    }
        }
App.defaultProps={
    color:'blue'
};

export default App;
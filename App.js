import React from 'react'

import {
    View,
    Text,
    Button

} from 'react-native'

class App extends React.Component{
    //Life cycle mounting category
    testing = "Constructot"
    constructor(){
        super();
        console.log("Constructor Method")
        console.warn("Constructor Method")
    }
    componentWillMount(){
        console.log("Will Mount")
        console.warn("Will Mount")
        this.testing = "Yes"
    }
    render(){
        console.log("render method");
        console.warn("render method")
        return(
            <View>
                <Text>{this.testing}</Text>
            </View>
        )
    }
    componentDidMount(){
        console.log("did mount");
        console.warn("Did mount")
        this.testing = "New Testing"
      
        this.setState({})
    }
    shouldComponentUpdate(){
        console.log("Should Component Update");
        console.warn("Should Component Update");
        return true;
    }
    componentDidUpdate(){
        console.log("Did Update")
        console.warn("Did Update")
    }

    

}

export default App;
import React, {Component} from 'react'
import axios from 'axios'

class Test extends Component{
    async componentDidMount(){
        const sendToServer = {
            email: 'jigglypuff@mail.com',
            password: 'digit'
        };

        const signInResp = await axios.post('/api/sign-in', sendToServer);
        console.log('sign in', signInResp);


        // const response = await axios.get('/api/test');
        // console.log('server response', response);
        // const user = await axios.get('/api/user');
        // console.log("user response", user)
    }
    render(){
        return (
            <h1>this is the test Component</h1>
    )
    }
}

export default Test;
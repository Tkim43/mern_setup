// require is like an import statement in React
// you are importing express
const express = require('express');
const cors = require('cors');
// resolve builds an absolute file path to that source
const {resolve} = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

// this sets up headers to allow cross origin request
// this allows anyone from any server to make calls to your api don't do this
app.use(cors());
app.use(express.json());

//when we serve a folder statically, it will look for a file by that request path
// checks the folder to see if the files exists
app.use(express.static(resolve(__dirname,'client','dist')));

// creating an endpoint. Its something an address should call and you get data back from it
// the /test makes it so you go to localhost:9000/test
app.get("/api/test",(request, responseAddress)=>{
    responseAddress.send({
        success: true,
        message: 'API working',
        something: 'just some random text'
    });
});

//creating another end point
app.get('/api/user', (request, response)=>{
    response.send({
        success:true,
        username: 'hello',
        email: 'there.com',
        name: 'destroyer'
    })
});

app.post('/api/sign-in', (request, response)=>{
    // request has to come before the response can come
    console.log("data from the client", request.body);

    response.send({
        success:true,
        postData: request.body,
        message: "hello this didn't worked"
    })
});

// app get everything
app.get('*', (request, response)=>{
    response.sendFile(resolve(__dirname, 'client','dist','index.html'))
});

// telling app to listen to the certain port
app.listen(PORT, () =>{
    console.log('server running on Port' + PORT)
});


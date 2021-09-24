# Getting Started with NUS Money app

This project contains the details of how we create the NUS Money App.
For this simple full-stack development, we separate the repositories into ~/FrontEnd & ~/BackEnd instead of making them into two different projects to better manage the source code. 

The Client-Server architecture shall includes:

### FrontEnd: 
	* To develop static web pages using HTML, CSS
	* To include the JavaScript codes to improve the website functionality. 
	* To include D3 for the data visualisation in the browser. 
	* [Tentative] Potentially using the ready JS framework, e.g.: reactJS or VUE (more smaller, lighter & simpler)
	* [Tentative] Potentially to have the mobile Apps (if time allows) 

Once we learnt about the HTML, CSS, and JavaScripts together with the ready-made JavaScript framework: Vue, ReactJS, AngularJS and etc, and running the site locally, we might begin to wonder how to deploy the application. That's why the Express sever hosted at Heroku cloud will be helpful here.

### BackEnd: 
	* Here are the high-level steps to host a simple site on the Heroku Cloud:
		* Setting up the backend server using Node.js.
		* To setup the Heroku, Git, and npm.
		* To create an Express.js server. 
		* To create the static files (html/css/js describe the frontend) and to be stored at the backend server.
		* Deploy to the Heroku.
	* To build the API using Node.js and Express.
	* To build the SQL Databases, schemas and queries. 
	* To connect the Node.js to MySQL Databases.

Reference: 
		[How to deploy your app to the web using Express.js and Heroku](https://www.freecodecamp.org/news/how-to-deploy-your-site-using-express-and-heroku/)

### Things to note:

#### Node.js
Node.js is the runtime environment based on the chrome V8 engine for executing the JavaScript at the server side. Similarly, the browser can be said as the runtime environment to execute the HTML, CSS or JS.  

Node.js is neither a programming language nor a framework.

Node.js is a platform used to build the backend services like API, web service, and allow the browser to acquire the data. Modules include:

| Modules | Description|
|   :----:    |    :----:    |
| HTTP | (server.js) For web service. E.g: var http = require("http"); |
| URL  | (router.js) For browser to send request and acquire the data from the backend. |
| QueryString | (requestHandle.js) To handle the parameters sent by the browser via the GET/POST, and to convert the parameters into JS objects. |
| FileSystem | To read the file on server side) |

#### Express 
Express is a framework based on Node.js used for building web applcation



## Overview - Concept of full-stack development

The concept of the development of NUS Money is illustrated as below:

<div align=center><img src="doc/img/concept.png"></div>

#### Step 1 
1. In general, the static files (html, css, ps) are stored at the server side.
2. The browser has no idea how the website looks like and doesn't contain any information of the website.
3. Once the user key in the website URL at the browser, the browser (client) will start look for the website and the server (node.js) that hosting the website will response to this request. It could be other type of server, for our case (NUS Money) will be using node.js.

#### Step 2 
1. The nodes.js will response to the browser (client) request and sending the static files (html, css, js) to the browser.
2. The browser has the capability to read the static files and display the data accordingly.

#### Step 3
1. When someone clicks a "button" or an object on the website, the browser has no idea what is suppose to happen. It only catches the action perform by user through a JavaScript handler, pick up the value from the input field (e.g. the first name and the last name enter by the user).
2. The browser emit a WebSocket message using the WebSocket client connected to the server. WebSocket is a protocol that enables the interaction between a web browser and a server. 

#### Step 4
1. The server component of the WebSocket connection receives the message and process the needs accordingly - you may imagine this similar to the transaction processor. 
2. This is where the Express + Node.js come in to tell how are we going to handle the received API request. Similar to the kitchen helper received the order, start preparing the ingredients needed and pass it to the chef to tell what need to be cooked. 

#### Step 5 & Step 6
1. In some cases we may not need the dbapi to handle the simple application. However, we're not sure whether there is adapter in the node.js to the SQL. Otherwise, we can keep the database at the same layer / container. 

Reference:
[Why The Hell Would I Use Node.js?](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)



##  What we have completed

### FrontEnd 
#### To Do

- HTML [shall be completed in Connecting to FrontEnd Homework]
- JS [shall be completed in Connecting to FrontEnd Homework]
- CSS [shall be completed in Connecting to FrontEnd Homework]

#### Homework of PC2 - Connecting to the FrontEnd

This homework is a starter of the NUS Money. Once we have completed this part, the FrontEnd of the NUS money is completed expect **to include D3 for the data visualisation in the browser.** 


### BackEnd 
#### To Do

- API Documentation - To tell the services defined at the backed (Postman)[Done]
- Define the API - Response from the Server (Express.js)
- Database Schema
- Deploy to Heroku.

#### Explanation on the API & Postman

The API listed in the Postman can be considered as a kind of documentation  to tell the developers what are the services have been defined at the backend (node.js & Express). Meaning, once the API endpoint is call in the JavaScript, example:  

``` JavaScript
  var requestOptions = {
    method: "POST",
  };

  fetch("https://nusbackendstub.herokuapp.com/user/add", requestOptions)
}
```

the server (node.js & Express) will know how to response and to get the data back to the frontend based on the API request.

To give those developers clarity on the API service that are available, we document those details into JSON format and put it into Postman for testing purpose.

What we need to do with the API would be on the Express or node.js only. Not the frontend. Since Jon has already prepared a set of API for us, we can just use that to design our Express part.

Due to the limitation of the time, I believe he will give us more samples for the Database and Express part during the remaining 2 days. We can consider to use that if any.


#### Sample code during the Day 1 of Connecting the FrontEnd to backEnd

The code provided by Dixant gave us a very good direction of how to fetch the data using the API. However, the day 1 class only guide us how to use the API to fetch the data to and from the server (Heroku cloud). We have not learned how Jon & Dixant use the Express to handle the API request. 

The APIs that we saw during the Day 1 were the endpoint. Meaning, the API call was triggered by the action that we performed on the browser and sent it to the server. The server has no idea what it suppose to do when the server received the API request (Endpoint). When we calling the API either using PUT, POST, GET, or others, it simply try to tell the server what we plan to do but not exactly how to do it.

Therefore, we need a set of instructions to let the backend knows, what the server need to do once it received the API request and which port or URL the server should listen to. That's why Express comes into picture.

Below is the sample code from the Express.js:

```Express
const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

However, the node.js do have the build-in HTTP module to handle this request but comparing the code to Express, it is much more complicated.
Example as below:

```JavaScript


// Requiring the module
const http = require('http');
  
// Creating server object
const server = http.createServer((req, res) => {
    const url = req.url;

if(url === '/about') {
        res.write('<html>');
        res.write(
'<head><title>Hello World!</title><head>');
        res.write(
'<body><h2>Node.js build in HTML</h2></body>');
        res.write('</html>');
        return res.end();
    }
});

// Server setup
server.listen(3000, () => {
    console.log("Server listening on port 3000")
});


```

Therefore, these ready-made JavaScript framework (VUE, Express) is more preferable and lightweight.  




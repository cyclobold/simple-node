const http = require("http");

const serverIp = '127.0.0.1'
const PORT = 2000;

const server = http.createServer((request, response) => {

    //check the path
    const requestBox =  request.url.split("?");
    let request_query = [];
    let request_url;

    if(requestBox.length > 1){
        //there is at least one query parameter
        request_url = requestBox[0];
        console.log("URL: ", request_url)

        for(let i = 1; i < requestBox.length; i++){
            request_query.push(requestBox[i]);
        }

    }else{
        //no query parameter

        request_url = requestBox[0];
        console.log("URL: ", request_url)
    }

    console.log("Query: ", request_query)
    
    


    

    if(request_url === '/'){
        //go to home page
        //set the status code
        response.statusCode = 200;
        //set the header of the response
        response.setHeader("Content-Type", "text/plain")

        //send the response
        response.end("This is home page");
    }

    else if(request_url == '/about-us'){
        //go to about us
        //set the status code
        response.statusCode = 200;
        //set the header of the response
        response.setHeader("Content-Type", "text/plain")

        //send the response
        response.end("This is about us page");

    }else if(request_url === '/login'){
        //go to login
        //set the status code
        response.statusCode = 200;
        //set the header of the response
        response.setHeader("Content-Type", "text/plain")

        //send the response
        response.end("This is login page");
    }else{
        //error 404
        //set the status code
        response.statusCode = 404;
        //set the header of the response
        response.setHeader("Content-Type", "text/plain")

        //send the response
        response.end("Page not found");

    }



   

   


});

server.listen(PORT, serverIp, () => console.log("Server is now active ..."));



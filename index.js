const http = require("http");
const port = process.env.port || 4500;



const server = http.createServer((req, res) =>{

    //it is console only after typing in url and reload
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader("content-type", "text/html")
    res.end("Hello Nepal its me");
    
})


server.listen(port, ()=>{
    console.log(`App is listening on the port ${port}`);
});
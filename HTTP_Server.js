const http=require('http')
console.log(http);
const port=5000;

const userDetails={
    name:"Admin",
    email:"admin@gmail.com",
    password:"admin@123"
}

const server=http.createServer((req, res)=>{
    res.end(JSON.stringify(userDetails));
});


const options={
    path:'/getUsers'
}

http.request(options,()=>{
    console.log(res);
})


server.listen(port,()=>{
    console.log("Server is running at port:5000");
    
});
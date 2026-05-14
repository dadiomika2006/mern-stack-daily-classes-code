const fs=require('fs')
// console.log(fs);

// fs.writeFile("sample.txt","second tme data insertion this is sample file creating by node ",()=>{
//     console.log("File Created successfully");
// });

// fs.appendFile("sample.txt","second tme data insertion this is sample file creating by node\n ",()=>{
//     console.log("data appended sunccessfully");
//       fs.readFile("sample.txt","utf-8",(err,data)=>{
//     if(err){
//             console.error(err);
//     }else{
//          console.log(data);
//     }  
// });
    
// });


setTimeout(()=>{
    fs.writeFile("sample.txt","second tme data insertion this is sample file creating by node ",()=>{
    console.log("File Created successfully");
});
  
},2000)

setTimeout(()=>{
fs.appendFile("sample.txt","second tme data insertion this is sample file creating by node\n ",()=>{
    console.log("data appended sunccessfully");
    
    
});


},5000)


setTimeout(()=>{
    fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
            console.error(err);
    }else{
        console.log("****************read starts ater 5s**************")
         console.log(data);
    }  
})
},5000)


fs.unlink("sample.txt",(err)=>{
    if(err)
        console.log(err);
    else
        console.log('deleted successfully');
        
})
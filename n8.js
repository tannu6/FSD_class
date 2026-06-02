const express = require('express');

const app = express();

// JSON Array
let students = [
    { name: "Rahul", height: 170 },
    { name: "Amit", height: 180 },
    { name: "Neha", height: 160 }
];
app.get("/sort",(req,res)=>{
res.set("content-type","text/html")
var des=students.sort((a,b)=>b.height-a.height)

for(k of des){

res.write(k.name+"="+k.height+"<br>");
}

res.send();
})
app.listen(5003)
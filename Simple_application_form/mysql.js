var http = require("http");
var url = require("url");
var mysql = require("mysql");

var server = http.createServer(function (req, res) {
    console.log("request from client received.....");
    console.log("processing the request parameters...");
    const MyURL = new URL(req.url, "http://localhost:8080");
    var name = MyURL.searchParams.get("name");
    var age = MyURL.searchParams.get("age");
    var address = MyURL.searchParams.get("address");
  
    console.log("Name = " + name);
    console.log("Age = " + age);
    console.log("address = " + address);
  
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Gauri@1029",
      database: "student_form",
    });
  
    console.log("trying to connet");
  
    con.connect(function (err) {
      if (err) {
        console.log("error in connection");
        res.write("Databases connection failures.Try again later");
        res.end();
      } 
      else{
        console.log("connected successfully");
        var query = "INSERT INTO students(Name , Age, Address) VALUES(?,?,?)";
        var values =[name,age,address];
        con.query(query,values,function(error,result){
            if(error){
                console.log("erroe in query");
                res.write("Internal error occurred");
                res.end();
            }
            else{
                console.log("Record Inserted");
                res.write("Record inserted successfully");
                res.end();
            }
        })

      }
      
    })
  })


console.log("starting the server.....");
server.listen(8080);
console.log("server started.....");

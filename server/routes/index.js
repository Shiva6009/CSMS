var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

router.post('/', function (req, res, next) {

  console.log(" Inside Router")
  console.log(" UserName ", req.body.employeeID)
  console.log(" Password ", req.body.password)
//  res.send(" Hai Node ")
  mongoose.connect("mongodb+srv://Shiva:Admin123@cluster0.se2xkky.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, useUnifiedTopology: true
    }, (err) => {
      if (err) {
        console.log(" Error ", err)
        return err;
      }
      else {
        //console.log(" DB Connected ")
        results = 'DB Connected'

        var collection = mongoose.Collection('LoginDetails')
        collection.find({ emailid: req.body.employeeID }, { $exists: true }).toArray(function (err, docs) //find if documents that satisfy the criteria exist
        {
          if (docs.length > 0) //if exists
          {
            console.log(docs); // print out what it sends back
          }
          else // if it does not 
          {
            console.log("Not in docs");
          }
        });
        console.log(" Results ", results)
     //   response.setHeader("Content-Type", "text/html")
       // res.send(results)
      }
    })

});

module.exports = router;

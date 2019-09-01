/**
 * Created by admin on 11/9/2017.
 */

var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'angularjs'
});

app.use(express.static("views"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());




app.get('/getProducts', function (req, res) {
    /* connection.connect();*/
    connection.query('select * from tblproducts', function (err, rows, fields) {
        if (!err) { //res.render(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    });

});
app.get('/Details/:ProductId', function (req, res) {
    connection.query('select * from tblProducts where ProductId=?', [req.params.ProductId], function (err, record, fields) {
        if (!err) {
            res.send(record);
            console.log(record);
        } else {
            console.log(err);
        }
    })
})
app.get('/Edit/:ProductId', function (req, res) {
    connection.query('select * from tblProducts where ProductId=?', [req.params.ProductId], function (err, record, fields) {
        if (!err) {
            res.send(record);
            console.log(record);
        } else {
            console.log(err);
        }
    })
})
app.get('/Delete/:ProductId', function (req, res) {
    connection.query('select * from tblProducts where ProductId=?', [req.params.ProductId], function (err, record, fields) {
        if (!err) {
            res.send(record);
            console.log(record);
        } else {
            console.log(err);
        }
    })
})
app.post('/Create', function (req, res) {
    var data = {
        ProductId: req.body.ProductId,
        Name: req.body.Name,
        Price: req.body.Price,
        Manufactured: new Date(req.body.Manufactured)
    };
    connection.query('insert into tblProducts SET ?', data, function (err, records, fields) {

        if (!err) {
            console.log('Product Inserted');
        } else {
            console.log('unable to insert Record');
        }
    })
})
app.put('/Edit', function (req, res) {

    connection.query('UPDATE tblProducts SET Name=?,Price=?,Manufactured=? where ProductId=?',
        [req.body[0].Name, req.body[0].Price, new Date(req.body[0].Manufactured), req.body[0].ProductId],
        function (err, records, fields) {

            if (!err) {
                res.end(JSON.stringify(records));
                console.log('Product Updated');
            } else {
                console.log(err);
            }
        })
})


app.delete('/Delete', function (req, res) {
    console.log(req.body[0].ProductId)
    connection.query('DELETE from tblProducts WHERE ProductId=?', [req.body[0].ProductId], function (err, records, fields) {

        if (!err) {
            console.log('Product deleted');
        } else {
            console.log(err);
        }
    });
});
app.listen(8080);
console.log('server started on http://127.0.0.1:8080');
const { query } = require('express');
const mysql = require('../shared/connect');

exports.getMentor = async (req,res,next) => {
    mysql.connection.query("Select * from mentors", (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}

exports.createMentor = async (req,res,next) => {
    const query = `Insert into mentors(id, name) values (${req.body.id},'${req.body.name}');`
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}


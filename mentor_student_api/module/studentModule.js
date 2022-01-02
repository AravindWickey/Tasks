const { query } = require('express');
const mysql = require('../shared/connect');

exports.getStudent = async (req,res,next) => {
    mysql.connection.query("Select * from students", (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}

exports.createStudent = async (req,res,next) => {
    const query = `Insert into students(id, name, mentor_name) values (${req.body.id},'${req.body.name}','${req.body.mentor_name}');`
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}

exports.updateStudent = async (req,res,next) => {
    console.log(req.body.name)
    const query = `UPDATE students SET mentor_name = ${req.body.mentor_name} where name IN (${req.body.name})`
    mysql.connection.query(query, (err, result)=> {
        if(err) res.status(500).send({msg: err})
        res.send(result)
    })
}

exports.noMentor = async (req,res,next) =>{
        mysql.connection.query("Select * from students where mentor_name='null'", (err, result)=> {
            if(err) res.status(500).send({msg: err})
            res.send(result)
        })
    }
exports.updateStudentOnetoOne = async (req,res,next) => {
        console.log(req.body.name)
        const query = `UPDATE students SET mentor_name = ${req.body.mentor_name} where name = (${req.body.name})`
        mysql.connection.query(query, (err, result)=> {
            if(err) res.status(500).send({msg: err})
            res.send(result)
        })
    }    

exports.studentsformentor = async (req,res,next) =>{
        console.log(req.body)
        mysql.connection.query(`Select * from students where mentor_name=${req.body.mentor_name}`, (err, result)=> {
            if(err) res.status(500).send({msg: err})
            res.send(result)
        })
    }    
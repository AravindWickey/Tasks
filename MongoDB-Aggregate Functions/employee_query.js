use integra;
//db.createCollection("employee")
//db.employee.insert([{Name:'user_one',Age:'22'},{Name:'user_two',Age:'32'},{Name:'user_three',Age:'42'}])
//db.employee.find({Age:'32'}) //it will find whose age is 32
//db.employee.updateOne({Name:'user_two'},{$set:{Age:67}})
//db.employee.remove({Age:67})
//db.employee.find({$or:[{Age:'67'},{Name:'user_three'}]})
//db.employee.find({$and:[{Age:'67'},{Name:'user_three'}]})
//db.employee.findOne({Age:'67'})
//db.employee.find({Age:{$ne:'67'}})
//db.employee.find({Age:{$lt:'67'}})
//db.employee.find({Age:{$lte:'67'}})
//db.employee.find({Age:{$gte:'50'}})
//db.employee.find({Age:{$in:['42']}})
//db.employee.find({Age:{$nin:['42']}})
//db.employee.find({Age:'67'},{Name:0})// it will not show Name.//Projection.
//db.employee.find().skip(1).limit(1)
//db.employee.find().sort({Age:-1})//DECENDING
//db.employee.find().sort({Age:1})//ASCENDING
//db.employee.distinct("Age")
//db.employee.distinct("Age",{Name:'user_one'})

//db.employee.updateMany({Name:'user_three'},{$set:{presentDays:45}}) //to Update the values in existing Collection.


//Aggregate Functions / 16 DEC.

db.employee.aggregate([
    {
    $group:
    {
        _id:"$Age",
        CountRecord:{"$sum":"$presentDays"} 
                    //$min, $max, $avg  
    }
    }
    ,{
    $match: 
    {
        CountRecord:{$gte:30}
    }
    }
    ,{
    $project: {
        _id:1,
        CountRecord:1
    }    
    }
    ,{
    $sort: {
           CountRecord:-1 
           }
    },{$limit:2},{$skip:1} 
])





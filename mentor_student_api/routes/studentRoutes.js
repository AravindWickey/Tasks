var express = require("express");
var router = express.Router();
var studentModule = require('../module/studentModule');

router.get("/get",studentModule.getStudent);
router.post("/create",studentModule.createStudent);
router.put("/update",studentModule.updateStudent);
router.get("/get/noMentor",studentModule.noMentor);
router.put("/get/updateOnetoOne",studentModule.updateStudentOnetoOne);
router.get("/get/studentsformentor",studentModule.studentsformentor);





module.exports = router;

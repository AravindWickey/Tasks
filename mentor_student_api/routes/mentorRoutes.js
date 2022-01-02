var express = require("express");
var router = express.Router();
var mentorModule = require('../module/mentorModule');

router.get("/get",mentorModule.getMentor);
router.post("/create",mentorModule.createMentor);



module.exports = router;

const express = require("express");

const Level = require("../models/englishLevel");

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
    //   const { levelId } = req.body;
      
    //   if(await Level.findOne({levelId}))
    //     return res.status(400).send({ error: 'Level already exists!'});
      
      const level = await Level.create(req.body);
  
      return res.send({ 
        level

      });
  
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  });

module.exports = (app) => app.use("/level", router);

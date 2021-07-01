const { error } = require("console");
const { response } = require("express");
const express = require("express");
const { find, findOne } = require("../model/userData");
const router = express.Router()
const userData = require('../model/userData')

//create
router.post('/', async (req,res) => {
    const userDataPost = new userData ({
        id: req.body.id,
        userName: req.body.userName, 
        accountNumber: req.body.accountNumber,
        emailAddress : req.body.emailAddress,
        identityNumber : req.body.identityNumber,
    })
    try {
        const user = await userDataPost.save()
        res.json(user)
    } catch (error) {
        res.json({message: error})
    }
})

//read by account number
router.get('/:accountNumber',  (req,res,next) => {
  userData.findOne({accountNumber: req.params.accountNumber})
  .then(result=>{
      res.status(200).json({
          userData:result
      })
  })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
})

//read by IdentityNumber
router.get('/:IdentityNumber',  (req,res,next) => {
    userData.findOne({IdentityNumber: req.params.IdentityNumber})
    .then(result=>{
        res.status(200).json({
            userData:result
        })
    })
     .catch(err=>{
         console.log(err);
         res.status(500).json({
             error:err
         })
     })
  })

//update
  router.put('/:userid', async (req,res) => {
    try {
        const userUpdate = await userData.updateOne({id: req.params.userid},{
        userName: req.body.userName,
        emailAddress : req.body.emailAddress,
        })
        res.json(userUpdate)
    } catch (error) {
        res.json({message: error})
    }
})

//delete
router.delete('/:userid', async (req,res) => {
    try {
        const userDelete = await userData.deleteOne({id: req.params.userid})
        res.json(userDelete)
    } catch (error) {
        res.json({message: error})
    }
})

 /* router.put('/:id',  (req,res,next) => {
        const update = new userData({
            userName: req.body.userName, 
            emailAddress : req.body.emailAddress,
        });
        userData.updateOne({_id: req.params.id}, update).then(
          () => {
            res.status(200).json({
              message: 'Thing updated successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      });
*/
module.exports = router
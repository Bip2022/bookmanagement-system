const {users} = require('../database/connection')

const fetchUser = async(req,res) =>{
  try{
  const users = await User.findAll()
  res.status(200).json({
    message:"User feteched successfully"
  })
}catch(err){
  res.status(500).json({
    message: "Error fetching user",
    error: err.message
  })
}
}
const createUser =(req,res) =>{
  try{
    console.log(req.body)
    const {userName, userEmail, userPassword, userRole} = req.body
    if(!userName || !userEmail || !userPassword || !userRole){
      return res.status(400).json({
        message: "All fields are required"
      })
    }
    const newUser = await users.create({
      userName,
      userEmail,
      userPassword,
      userRole
    })
  res.status(201).json({
    message:"User created successfully",
    data: newUser
  })
}catch(err){
  res.status(500).json({
    message: "Error creating user",
    error: err.message
  })
}
}

const fetchSingleUser = async(req,res) =>{
  try{
    const id = req.params.id
    const user = await users.findByPk(id)
    if(!user){
      return res.status(404).json({
        message: "User not found"
      })
    }
    res.status(200).json({
      message: "User fetched successfully",
      data: user
    })
  }catch (err){
    res.status(500).json({
      message: "Error fetching user",
      error: err.message
    })
  }
}

const updateUser = async(req,res) =>{
  try{
    const id = req.params.id
    const {userName, userEmail, userPassword, userRole} = req.body
    const user = await users.findByPk(id)
    if(!user){
      return res.status(404).json({
        message: "User not found"
      })
    }
  //updaye only provided fields
    user.userName = userName || user.userName
    user.userEmail = userEmail || user.userEmail
    user.userPassword = userPassword || user.userPassword
    user.userRole = userRole || user.userRole
    
    await user.save()
    res.status(200).json({
      message: "User updated successfully",
      data: user
    })
  }
  catch(err){
    res.status(500).json({
      message: "Error updating user",
      error: err.message
    })
  }
}

const deleteUser = async(req,res) =>{
  try{
    const id = req.params.id
    const user = await users.destroy({
      where:{
        id:id
      }
  })
      if(!user){
        return res.status(404).json({
          message: "User not found"
        })
      }
    res.status(200).json({
      message: "User deleted successfully"
    })
  }catch(err){
    res.status(500).json({
      message: "Error deleting user",
      error: err.message
    })
  }
}

module.exports = {fetchUser,createUser,fetchSingleUser,updateUser,deleteUser}

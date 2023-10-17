import express from 'express'

let user = ['tim', 'tom', 'terry']

const express = express()
const port = 3000

app.get ('/usewr/:name', (req, res)=>{
    const user = req.params
    res.send ('createnew student name, ${user.name}')
})
   
    app.listen(port,()=>{
        console.log('listening on http://localhost:${port}')
    })




//app.post('/:students', (req, res) => {
  //  res.send('POST request to the homepage')
  //})
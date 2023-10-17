import express from 'express'

let user = ['tim', 'tom', 'terry']

const app = express()
const port = 3000

app.get ('/user/:name', (req, res)=>{
    const user = req.params
    res.send ('create new student name, ${user,name}')
})
//app.post('/:students', (req, res) => {
  //  res.send('POST request to the homepage')
  //})
   
    app.listen(port, () => {
        console.log('Example app listening on port http://localhost:${port}')
    })




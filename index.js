// npm init : setting mọi thứ cho dự án từ tên, git repository,... ( mọi thông tin sẽ được lưu trong package.json)
// npm install express : cài express framework

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
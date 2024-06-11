const express = require('express')
const app = express()
const PORT = 8000

const rappers ={ 
    '21 savage': {
        'birthname': 'Sheyaa Bin', 
        'birthLocation': 'London, England', 
        'age': 29
    },
    'chance the rapper':{
        'age': 29,
        'birthname': 'chancellor bennett',
        'birthLocation': 'chicago, illonois',
    },
    'unknown':{
        'age': 0,
        'birthname': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})
app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT}`)
}) 
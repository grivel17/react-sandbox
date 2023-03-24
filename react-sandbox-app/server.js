const express = require('express')
const app = express()

app.use(express.json())

const messages = [
  {
    author: 'SC',
    text: 'Obrót zakończony, poziom zachowany. Operacja zakończona.',
  },
  {
    author: 'PAO',
    text: 'Dobra robota, jesteście na ścieżce podejścia. Wysokość wynosi 3,5 km.',
  },
  {
    author: 'CAPCOM',
    text: 'W Houston wszystko gotowe. Zostaje minuta.',
  },
]

app.get('/messages/:forum', (request, response) => {
  if (request.params && request.params.forum === 'nasa') {
    return response.send(messages)
  }
  return response.status(404).send({ error: 'Nieznane forum' })
})
app.post('/messages/:forum', (request, response) => {
  if (request.params && request.params.forum === 'nasa') {
    messages.push(request.body)
    return response.send('OK')
  }
  return response.status(404).send({ error: 'Nieznane forum' })
})

app.listen(5000, () => console.log('🚀 Serwer uruchomiony na porcie 5000!'))

const express = require('express')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000

const storage = multer.diskStorage({
  destination: 'uploads/', // 1. Diretório de destino para armazenar os arquivos enviados
  filename: function (req, file, cb) {
    // 2. Função que determina o nome do arquivo
    const uniqueID = uuidv4() // 3. Gera um ID único para o arquivo
    const ext = path.extname(file.originalname) // 4. Obtém a extensão do arquivo original
    const filename = `${uniqueID}${ext}` // 5. Combina o ID único e a extensão para formar o nome do arquivo
    cb(null, filename) // 6. Chama a função de retorno (callback) com o nome do arquivo
  }
})
const upload = multer({ storage })

app.use(express.static('uploads'))


// Array para armazenar os IDs das músicas
const musicList = [];

app.post('/upload', upload.single('audio'), (req, res) => {
  const uniqueID = req.file.filename.replace(
    path.extname(req.file.filename),
    ''
  )
  musicList.push(uniqueID) // Adiciona o ID à lista de músicas
  res.status(200).json({ id: uniqueID })
})

// Rota para listar todas as músicas disponíveis
app.get('/musiclist', (req, res) => {
  res.json({ musicList });
});

app.get('/audio/:id', (req, res) => {
  const audioID = req.params.id
  const filePath = path.join(__dirname, 'uploads', audioID )

  console.log(filePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Áudio não encontrado')
  }

  res.setHeader('Content-Type', 'audio/mpeg')

  // Cria um stream de leitura com um buffer de tamanho específico
  const buffer_size = 64 * 1024 // 64 KB buffer
  const audioStream = fs.createReadStream(filePath, {
    highWaterMark: buffer_size
  })

  // Transmita o áudio para o cliente em tempo real
  audioStream.pipe(res)

  audioStream.on('error', error => {
    console.error('Erro ao ler o arquivo de áudio:', error)
    res.status(500).send('Erro ao ler o arquivo de áudio')
  })

  audioStream.on('end', () => {
    console.log('Áudio transmitido com sucesso')
  })
})

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})

# Documentação 


Esta é a documentação README para o seu servidor de upload e streaming de arquivos de áudio baseado em Node.js, usando Express e Multer. Esta aplicação permite aos usuários fazer o upload de arquivos de áudio, listar músicas disponíveis e transmitir arquivos de áudio por meio de seus IDs exclusivos. Aqui, forneceremos uma visão geral, instruções para configuração e explicaremos os vários endpoints e funcionalidades do servidor.

## Sumário
- [Começando](#começando)
- [Upload de Arquivos de Áudio](#upload-de-arquivos-de-áudio)
- [Listagem de Músicas Disponíveis](#listagem-de-músicas-disponíveis)
- [Transmissão de Arquivos de Áudio](#transmissão-de-arquivos-de-áudio)

## Começando
Para executar esta aplicação, é necessário ter o Node.js instalado em sua máquina. Siga estas etapas para começar:

1. Clone este repositório em sua máquina local.
2. Abra um terminal e navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências necessárias:
   ```bash
   npm install
   ```
4. Inicie o servidor com o seguinte comando:
   ```bash
   npm start
   ```
   O servidor será iniciado na porta 3000 por padrão. Você pode alterar a porta modificando a variável `port` no código, se necessário.

## Upload de Arquivos de Áudio
Para fazer o upload de um arquivo de áudio para o servidor, faça uma solicitação POST para o endpoint `/upload`. Você pode usar ferramentas como `curl` ou Postman, ou integrar isso em sua própria aplicação.

### Solicitação
- **URL:** `http://localhost:3000/upload`
- **Método:** POST
- **Formulário de Dados:** Envie seu arquivo de áudio com a chave 'audio'.

### Resposta
Após o upload bem-sucedido, você receberá uma resposta JSON com o ID exclusivo do arquivo de áudio enviado.

## Listagem de Músicas Disponíveis
Você pode obter uma lista de arquivos de música disponíveis fazendo uma solicitação GET para o endpoint `/musiclist`.

### Solicitação
- **URL:** `http://localhost:3000/musiclist`
- **Método:** GET

### Resposta
A resposta será um objeto JSON contendo uma matriz de IDs exclusivos de arquivos de música disponíveis.

## Transmissão de Arquivos de Áudio
Para transmitir um arquivo de áudio, faça uma solicitação GET para o endpoint `/audio/:id`, onde `:id` é o ID exclusivo do arquivo de áudio que você deseja transmitir.

### Solicitação
- **URL:** `http://localhost:3000/audio/:id.mp3`
- **Método:** GET

### Resposta
- Se o arquivo de áudio solicitado existir, ele será transmitido para o cliente em tempo real.
- Se o arquivo de áudio solicitado não existir, será enviada uma mensagem de erro 404.
- Se ocorrerem erros durante a transmissão, será enviada uma mensagem de erro 500.

## Conclusão
Este servidor fornece uma maneira simples e eficiente de fazer o upload, listar e transmitir arquivos de áudio. Sinta-se à vontade para personalizá-lo e aprimorá-lo de acordo com seus requisitos específicos. Se tiver alguma dúvida ou encontrar problemas, não hesite em entrar em contato.

Obrigado por usar este servidor de upload e transmissão de arquivos de áudio!

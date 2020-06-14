# para usar o typescript

- instalar as definições de tipos: npm install @types/express
- instalar o ts-node para poder executar os scripts no terminal: npm install ts-node
- criar arquivo de configuração do typescript: npx tsc --init
- criando aplicacao react com template para typescript
  npx create-react-app web --template=typescript
- para rodar um script: npx ts-node src/server.ts (npm run dev)
- para monitorar modificações durante o desenvolvimento: npm install ts-node-dev -D

## Uploado de arquivos

- Utilizar pacote multer:
  -- npm install multer
  -- Instalando as definições de tipos: npm install @types/multer -D
  -- havendo necessidade, pode-se implementar a função fileFilter do multer para poder filtar os tipos e tamando de arquivos permitido

---

# Acesso ao Banco de Dados

- instalar o Knex: npm install knex
- instalar o sqlite3: npm install sqlite3
- rodar a migration: npx knex migrate:latest --knexfile knexfile.ts migrate:latest (atalho: npm run knex:migrate)

## configurando o knex.

- criar arquivo knesfile.ts na raiz do projeto

# sobre rotas

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: Parâmetros que vem na própria rota que identificam um recurso. Geralmente são obrigatórios (/users/:id)
// Query Param: Parâmetros que vem na própria rota, geralmente sao opcionais.
// Request Body: Parâmetros para a criação/atualização de informações.

# Pacotes interessantes

- react-icons - https://react-icons.github.io/react-icons/

- leaflet - biblioteca javascript open-source para mapas interativos: https://leafletjs.com/ e
  https://react-leaflet.js.org/
  para instalar os dois pacotes, use: npm install leaflet react-le
  aflet

- axios - Promise based HTTP client for the browser and node.js: https://www.npmjs.com/package/axios

#React-Native

- Instalando fontes: npm install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
- React Navigation:
  - npm install @react-navigation/native
  - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- Usar mapas com o expo:
  - expo install react-native-maps
- Constants do Expo
  - expo install expo-constants
- Componente para imagens SVG
  - expo install react-native-svg
- Pacote de geolocalização do expo

  - expo install expo-location

- Desafio: utilizar o pacote react-native-picker-select com consulta ao IBGE

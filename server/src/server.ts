import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
//adicionando a funcionalidade para o express entender o json
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscas uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//POST: http://localhost:3333/users -> Criar usuário
//GET: http://localhost:3333/users -> Listar usuários
//GET: http://localhost:3333/users/5 -> Buscar dados do usuário com ID 5

//REQUEST PARAM: parâmetros que vem na própria rota que identificam um recurso
//QUERY PARAM: parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
//REQUEST BODY: parâmetros para criação/atualização de informações

//SELECT * FROM users WHERE name = 'Jéssica
//knex('users').where('name', 'Jéssica').select('*')

//requisição e resposta
app.use(errors());

app.listen(3333);
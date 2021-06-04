import {Router} from 'express';
import ControllerTeste from './app/controllers/ControllerTeste';


const routes = Router();

routes.get('/produtolista', ControllerTeste.produtoLista ); 

routes.get('/produtoid/:id', ControllerTeste.produtoId ); 

routes.get('/listaDepartamento',ControllerTeste.listaDepartamento ); 

routes.get('/departamento/:id',ControllerTeste.departamentoid ); 

routes.post('/incluirproduto',ControllerTeste.storepost);

routes.put('/alterarproduto/:id',ControllerTeste.updateput);

routes.delete('/deletar',ControllerTeste.delete);
   

export default routes;
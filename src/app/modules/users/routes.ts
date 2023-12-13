import router from 'core/router';
import { listUsers } from './controllers/listUsers.controller';
import { createUser } from './controllers/createUser.controller';

router.get('/users', listUsers);
router.post('/users', createUser);

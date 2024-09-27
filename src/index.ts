import app from './app';
import { dbConnection } from './config/dbconfig';


(async () => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
    await dbConnection.default();
})()
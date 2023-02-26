import app from './app.js';
import { sequelize } from "./database/database.js";
import './models/post.js';


async function main() {
    try {
        await sequelize.sync({ force: false});
        console.log("Success");
        app.listen(4000);
    } 
    catch (error) {
        console.log(error.message);
    }
}

main();
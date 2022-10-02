import 'dotenv/config'
import express from "express";
import mongoose from 'mongoose';
import { routes } from './routes/routes.js';

const server = express();

// enable middleware fore reading data
server.use(express.urlencoded( {extended: true} ));
server.use(express.json());

const PORT = process.env.PORT || 5000 ;

const db = await mongoose.connect(process.env.DATABASE_URL);

routes(server);

server.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + PORT)
})
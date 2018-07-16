import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';
import mongoose from 'mongoose';


mongoose.connect('mongodb://omer:123456a@ds139341.mlab.com:39341/yukselenspor_db');

const app = express();

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
    res.send('Eğitimbudur Rest API');
});


app.listen(3300, () => console.log("Çalıştı.."))
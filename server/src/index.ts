import express, {Request, Response} from "express";
import mongoose from 'mongoose';
const app = express();

const db = mongoose.connect('mongodb+srv://Shubh_tirkuta:R4WmCyj46OclBoQI@tirkuta.z6l7ylr.mongodb.net/?retryWrites=true&w=majority');

app.get("/" , (req: Request, res: Response) => {
    res.send("hello tirkuta")
})


app.listen(5000)


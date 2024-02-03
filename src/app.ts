import express, {Express, Request, Response} from "express";
import { Schema, model, connect } from 'mongoose';
interface IUser {
    name: string;
    email: string;
    avatar?: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
  });
const User = model<IUser>('User', userSchema);
const app: Express = express();
app.get("/", (req:Request, res:Response) => {
    res.send("Express + TypeScript Server");
});
app.get("/addUser", (req:Request, res:Response) => {
    
    AddUser().catch(err=>console.log(err));
    res.send("User Added");
});

async function AddUser() {
    // 4. Connect to MongoDB
    await connect('mongodb+srv://testuser:testpassword@cluster0.4apaso0.mongodb.net/tutorial_db?retryWrites=true&w=majority');
  
    const user = new User({
      name: 'Bill',
      email: 'bill@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await user.save();
  
    console.log(user.email); // 'bill@initech.com'
  }

export default app;
// import express from 'express';
// import dotenv from 'dotenv';
// import Path from 'path';
// import {fileURLToPath} from "url";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = Path.dirname(__filename);

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(Path.join(__dirname,"../frontend/dist")))
//     app.get("*",(req,res)=>{
//         res.sendFile(Path.join(__dirname,"../frontend","dist","index.html"));
//     });
// }

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// ...existing code...
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ...existing code...
if (process.env.NODE_ENV === "production") {
    // correct path: from backEnd/src -> up two levels to repo root -> frontEnd/dist
    const clientDist = path.join(__dirname, "..", "..", "frontEnd", "dist");

    app.use(express.static(clientDist));

    // SPA fallback middleware
    app.use((req, res) => {
        res.sendFile(path.join(clientDist, "index.html"));
    });
}
// ...existing code...
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// ...existing code...
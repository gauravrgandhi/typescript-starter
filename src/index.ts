import app from "./app";
import dotEnv from "dotEnv";

dotEnv.config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('[server]: Our server is running at http://localhost:' + port);
});

export default app;
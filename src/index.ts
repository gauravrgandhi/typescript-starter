import app from "./app";

const port = 3000;
app.listen(port, () => {
    console.log('[server]: Our server is running at http://localhost:' + port);
});

export default app;
import express from "express";
import type { Request, Express, Response } from "express";

const app: Express = express();

app.use(express.json())
app.use(express.text())

app.get("/", (_req: Request, res: Response) => {
	res.send("Hello Express!");
});

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);

    res.send("Received Content!")
})

export default app;
import express from "express";
import type { Request, Express, Response, NextFunction } from "express";

const app: Express = express();

app.use(express.json());
app.use(express.text());

const logger = (req: Request, _res: Response, next: NextFunction) => {
	console.log(req.headers, req.hostname);
	next();
};

app.get("/:id/:subId", logger, (req: Request, res: Response) => {
	console.log(req.params);
	console.log(req.query);
	res.send("Hello Express!");
});

app.post("/", (req: Request, res: Response) => {
	console.log(req.body);

	res.send("Received Content!");
});

export default app;

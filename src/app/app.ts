import express from "express";
import type { Request, Express, Response, NextFunction } from "express";

const app: Express = express();

app.use(express.json());
app.use(express.text());

const logger = (req: Request, _res: Response, next: NextFunction) => {
	console.log(req.headers, req.hostname);
	next();
};

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
	const user = req.body;
	console.log(user);

	res.json({
		success: true,
		message: "User is created successfully",
		data: user,
	});
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
	const course = req.body;
	console.log(course);
	res.json({
		success: true,
		message: "User is created successfully",
		data: course,
	});
});

app.get("/:id/:subId", logger, (req: Request, res: Response) => {
	console.log(req.params);
	console.log(req.query);
	res.send("Hello Express!");
});

app.post("/", (req: Request, res: Response) => {
	console.log(req.body);

	res.send("Received Content!");
});

app.get(
	"/",
	logger,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			let mistake: undefined;
			res.send(mistake);
		} catch (error) {
			next(error);
			// res.status(400).json({
			//   success: false,
			//   message: "failed to get data",
			// });
		}
	}
);

// handle 404
app.all("*", (req: Request, res: Response) => {
	res.status(400).json({
		success: false,
		message: "Route is not found",
	});
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	if (error) {
		res.status(400).json({
			success: false,
			message: "Something went wrong",
		});
	}
});

export default app;

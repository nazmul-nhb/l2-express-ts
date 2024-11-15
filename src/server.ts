import { Server } from "http";
import app from "./app/app";

const PORT = 4242;

let server: Server;

const bootStrap = async () => {
	server = app.listen(PORT, () => {
		console.log(`Server is Running on Port: ${PORT}`);
	});
};

bootStrap();

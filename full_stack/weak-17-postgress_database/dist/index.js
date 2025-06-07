"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const client = new pg_1.Client(config_1.POSTGRESS_URI);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signUp", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, email, password } = req.body;
        try {
            const insertQuery = `INSERT INTO users (username, email, password) VALUES 
      ($1,$2,$3);`;
            const result = yield client.query(insertQuery, [username, email, password]);
            console.log(result.rows);
            res.json({ message: "User successfully signed up" });
        }
        catch (err) {
            console.error("Error inserting user:", err);
            res.status(500).json({ error: "Failed to sign up user" });
        }
    });
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    });
}
main();

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
const prisma_1 = require("../src/generated/prisma");
const tsconfig_1 = require("./tsconfig");
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = new prisma_1.PrismaClient();
const connect_To_Db = new pg_1.Client(tsconfig_1.POSTGRES_URI);
app.get("/signUp/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const age = req.body.age;
        const city = req.body.city;
        const id = req.params.id;
        console.log(id);
        const response = yield client.user.findFirst({
            where: {
                id: parseInt(id)
            },
            // data:{
            //     username:username,
            //     // email:email,
            //     // password:password,
            //     // age:age,
            //     // city:city
            // }
            select: {
                todos: true,
                username: true,
                email: true
            }
        });
        res.json({ message: response });
    });
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_To_Db.connect();
        app.listen(3000, () => {
            console.log("server running on port 3000");
        });
    });
}
main();

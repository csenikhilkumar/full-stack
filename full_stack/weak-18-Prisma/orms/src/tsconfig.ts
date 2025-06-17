import env from "dotenv"
env.config()

export let POSTGRES_URI = process.env.DATABASE_URL
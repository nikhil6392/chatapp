import dotenv from "dotenv"

dotenv.config()

const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY,
    secret: process.env.SECRET
}

export default config
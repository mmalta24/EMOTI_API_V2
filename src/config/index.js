const config = {
    SECRET: process.env.SECRET,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
};


config.URL = `mongodb+srv://${config.USER}:${config.PASSWORD}@cluster0.r07xywt.mongodb.net/${config.DB}?retryWrites=true&w=majority&appName=Cluster0`;


module.exports = config;
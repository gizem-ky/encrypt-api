const mongoose = require('mongoose');
require('dotenv').config(); // dotenv paketini yükleyin

async function conn() {
    try {
        // .env dosyasındaki DB_CONN değişkenini kullanarak bağlantıyı yapın
        await mongoose.connect(process.env.DB_CONN);
        console.log("Database is connected");
    } catch (err) {
        console.log("Error:", err);
    }
}

module.exports = conn;

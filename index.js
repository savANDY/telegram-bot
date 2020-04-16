const express = require("express");
const telegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TELEGRAMTOKEN,
    opt = {polling: true},
    bot = new telegramBot(token, opt);

let app = express();

app.listen(3000, () => {
  console.log("Servidor levantado con éxito")

  bot.on("message", (msg) => {
    const id = msg.chat.id,
        echo = msg.text.toUpperCase();
    let message = "No he entendido... de momento sólo me puedes decir hola y adios"

    if (echo === "hola".toUpperCase()) {
      message = "Kaixo!"
    } else if (echo === "adios".toUpperCase()) {
      message = "Agur..."
    }
    bot.sendMessage(id, message).then(r => console.log(r));

  })
})

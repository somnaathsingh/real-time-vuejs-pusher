const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1412163",
  key: "0b49cd23a502dbecc378",
  secret: "99743c96472a301114cd",
  cluster: "ap2",
    useTLS: true
});

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        amount: req.body.amount,
        time: req.body.date
    });

    res.json([]);
})

console.log('listening to port 8000');
app.listen(8000)
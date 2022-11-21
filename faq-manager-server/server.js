const express = require('express');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(
  cors({
    origin: process.env.APP_CILET,
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const faqRouter = require('./routes/faqRouters');
app.use('/api/faq', faqRouter);

app.get('/', (req, res) => {
  res.json({ message: 'hello api' });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`https://localhost:${process.env.APP_PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});

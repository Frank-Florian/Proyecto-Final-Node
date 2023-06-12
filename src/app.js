const express = require('express');
const apiRoutes = require('./routes/index');
const errorRoutes = require('./middlewares/index');
require('dotenv').config();

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
apiRoutes(app);
errorRoutes(app);

app.get('/', (req, res) => {
    res.send('Testing');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

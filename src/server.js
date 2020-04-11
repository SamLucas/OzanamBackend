require("dotenv").config();
require("@/config/database");

import app from "./app";

app.listen(8080);

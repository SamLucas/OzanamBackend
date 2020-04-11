require("dotenv").config();
require("@/config/database");

import app from "./index";

app.listen(process.env.PORT || 3000);

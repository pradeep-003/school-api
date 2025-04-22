const db = require("./config/db"); // Import the database connection
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

const app = express();
const schoolRoutes = require("./routes/schoolRoutes");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", schoolRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

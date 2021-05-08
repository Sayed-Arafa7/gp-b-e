const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

/**
 *
 * Export the Routes here :
 * example :
 *
 *     const users = require("./routes/users");
 *
 *
 */

const config = require("./config/config");
DatabaseConnection: {
  require("./db-connection");
}

const cors = require("cors");
app.use(cors());

app.use(express.json());

IntialRoute: {
  app.get("/", (req, res) => {
    res.status(200).send({ message: "server is responding well" });
  });
}

Logging: {
  app.use((req, res, next) => {
    try {
      console.log({ time: new Date(), url: req.url, method: req.method });
      next();
    } catch (error) {
      console.log({ error: "Logging error" });
      next(error);
    }
  });
}

Routes: {
  /**
   * Add the exported routes here:
   * example:
   *
   *   app.use("/api/users", users);
   *
   *
   */
}

ErrorHandler: {
  app.use((req, res, next, err) => {
    res.status(500).send({ success: false, message: "Server Error occured" });
  });
}

const port = config.port;

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});

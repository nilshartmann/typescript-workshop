import express, { Request } from "express";
const PORT = 9000;
const app = express();
app.use(express.json());

/**
 * Req Params infered
 */
app.get("/hello/:firstname/", (req, res) => {
  res.send("Hello " + req.params.firstname);
});

// res.body, req.body: any
app.post("/", (req, res) => {
  // req.body => any
  res.send({
    result: {
      hello: "world",
      youSendMe: req.body,
    },
  });
});

type LoginRequestParams = {
  with2FA: boolean;
};

type LoginRequestBody = {
  login: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

// Req-Body, Res-Body typisiert
// URL params müssen manuell angegeben werden
app.post<LoginRequestParams, LoginResponse, LoginRequestBody>(
  "/login/:with2FA",
  (req, res) => {
    // req.body => any
    req.params.with2FA;
    req.body.login;
    res.send({
      token: "xxx",
    });
  }
);

app.listen(PORT, () => {
  console.log("Running server on port %s", PORT);
});

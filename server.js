import { app } from "./app.js";

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running at port ${process.env.PORT}.`);
});
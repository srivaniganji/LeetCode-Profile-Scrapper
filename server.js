const express = require("express");
const scrapeLeetCodeProfile = require("./scrape");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const username = "Srivani_Ganji";
  const profileData = await scrapeLeetCodeProfile(username);
  res.render("profile", { profileData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const puppeteer = require("puppeteer");

async function scrapeLeetCodeProfile(username) {
  const url = `https://leetcode.com/u/${username}/`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  const userData = await page.evaluate(() => {
    const profileName = document.querySelector(
      ".inline-flex.items-center.text-label-1.dark\\:text-dark-label-1.break-all"
    )?.innerText;
    const ranking = document.querySelector(
      ".ttext-label-1.dark\\:text-dark-label-1.font-medium.text-\\[24px\\]"
    )?.innerText;
    const solvedProblems = document.querySelector(
      ".ttext-label-1.dark\\:text-dark-label-1.font-medium.text-\\[24px\\]"
    )?.innerText;
    const acceptanceRate = document.querySelector(
      ".ttext-label-1.dark\\:text-dark-label-1.font-medium.text-\\[24px\\]"
    )?.innerText;

    return {
      profileName,
      ranking,
      solvedProblems,
      acceptanceRate,
    };
  });

  await browser.close();
  return userData;
}

module.exports = scrapeLeetCodeProfile;

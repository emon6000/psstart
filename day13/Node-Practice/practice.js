const fs = require("fs").promises;

async function processComplain() {
  try {
    const data = await fs.readFile("./complain1.txt", "utf-8");
    const upperText = data.toUpperCase();

    await fs.writeFile("./shout.txt", upperText);

    console.log("Complain processed");
  } catch (e) {
    console.log(e);
  }
}

processComplain();

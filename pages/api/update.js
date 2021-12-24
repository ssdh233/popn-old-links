import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await fs.readFile(
      path.join(process.cwd(), "./data/final.json")
    );
    const finalJson = JSON.parse(data.toString());

    finalJson[req.body.detail] = req.body;

    await fs.writeFile("./data/final.json", JSON.stringify(finalJson));
  }
}

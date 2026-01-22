import express from "express";
import cors from "cors";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "demodata.json");

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/trafficData", async (_req, res) => {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(raw);
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: "Failed to read traffic data",
      message: err instanceof Error ? err.message : String(err),
    });
  }
});

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Traffic backend listening on http://localhost:${port}`);
});


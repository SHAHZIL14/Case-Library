import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEIGHTS = {
  caseNumber: 5,
  caseType: 4,
  court: 3,
  filedBy: 2,
  filedAgainst: 2,
  judge: 3,
  summary: 1,
};

function search(request, response) {
  try {
    const keyword = request.query.keyword;

    if (!keyword || keyword.trim() === "") {
      return response.status(400).json({ error: "Keyword is required" });
    }

    const query = keyword.trim().toLowerCase();
    const filePath = path.join(__dirname, "../database/DATA.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const casesData = JSON.parse(fileContent);

    const regex = new RegExp(query, "i");

    const matched = casesData.filter(function(c) {
      return (
        regex.test(c.caseNumber) ||
        regex.test(c.court) ||
        regex.test(c.caseType) ||
        regex.test(c.filedBy) ||
        regex.test(c.filedAgainst) ||
        regex.test(c.judge) ||
        regex.test(c.summary)
      );
    });

    const ranked = matched
      .map(function(c) {
        let score = 0;
        if (regex.test(c.caseNumber)) score += WEIGHTS.caseNumber;
        if (regex.test(c.caseType)) score += WEIGHTS.caseType;
        if (regex.test(c.court)) score += WEIGHTS.court;
        if (regex.test(c.filedBy)) score += WEIGHTS.filedBy;
        if (regex.test(c.filedAgainst)) score += WEIGHTS.filedAgainst;
        if (regex.test(c.judge)) score += WEIGHTS.judge;
        if (regex.test(c.summary)) score += WEIGHTS.summary;
        return { ...c, score };
      })
      .sort(function(a, b) {
        return b.score - a.score;
      });

    return response.status(200).json({
      keyword: query,
      count: ranked.length,
      results: ranked,
    });

  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Internal server error" });
  }
}

export default search;

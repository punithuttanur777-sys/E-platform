import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coursesPath = path.join(__dirname, "../src/data/courses.js");

const buf = fs.readFileSync(coursesPath);
const isUtf16 = buf.length >= 2 && buf[1] === 0 && buf[0] !== 0;
const content = isUtf16 ? buf.toString("utf16le") : buf.toString("utf8");

fs.writeFileSync(coursesPath, content, "utf8");
console.log("courses.js converted to UTF-8");

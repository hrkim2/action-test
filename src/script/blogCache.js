const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POST_DIR = path.join(process.cwd(), "src/blog");
const sortListByDateOrTitle = (list) =>
  list.sort((a, b) => (a.date < b.date && a.title < b.title ? 1 : -1));

function allPost() {
  const fileNames = fs.readdirSync(POST_DIR);
  const allPost = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(POST_DIR, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");
    const meta = matter(contents).data;

    return {
      id,
      ...meta,
    };
  });

  return `export const allPost = ${JSON.stringify(
    sortListByDateOrTitle(allPost)
  )}`;
}

try {
  fs.readdirSync("src/cache");
} catch (e) {
  fs.mkdirSync("src/cache");
}

fs.writeFile("src/cache/blogData.js", allPost(), function (err) {
  if (err) return console.log(err);
  console.log("-cached-");
});

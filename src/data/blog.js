import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

/* process.cwd() : project root 경로 */
const POST_DIR = path.join(process.cwd(), "src/blog");

const sortListByDateOrTitle = (list) =>
  list.sort((a, b) => (a.date < b.date && a.title < b.title ? 1 : -1));

export function getAllSortedPost() {
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

  return sortListByDateOrTitle(allPost);
}

export async function getPostData(id) {
  const fullPath = path.join(POST_DIR, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

import { promises as fs } from "fs";
import path from "path";

export default function Home({ data }) {
  console.log(data);
  return <div>index</div>;
}

export async function getStaticProps(context) {
  const data = await fs.readFile(path.join(process.cwd(), "./data/index.json"));
  return {
    props: {
      data: JSON.parse(data.toString()),
    },
  };
}

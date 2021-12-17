import { promises as fs } from "fs";
import path from "path";
import React from "react";

export default function Home({ data }) {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>ジャンル名</th>
          <th>曲名</th>
          <th>アーティスト</th>
          <th>バージョン</th>
          <th>紹介</th>
          <th>バナー</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ version, music_list, title, index, musicchar }) => (
          <React.Fragment key={version}>
            {music_list
              // .filter((m) => m.detail)
              .map((m) => (
                <tr key={m.banner}>
                  <td>{m.title || ""}</td>
                  <td>{m.title || ""}</td>
                  <td>{m.title || ""}</td>
                  <td>{title}</td>
                  <td>{m.detail && <a href={m.detail}>楽曲紹介</a>}</td>
                  <td>
                    <a href={m.banner}>バナー</a>
                  </td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export async function getStaticProps(context) {
  const data = await fs.readFile(path.join(process.cwd(), "./data/index.json"));
  return {
    props: {
      data: JSON.parse(data.toString()),
    },
  };
}

import { promises as fs } from "fs";
import path from "path";
import React, { useState } from "react";

export default function Home({ data }) {
  console.log(data);
  const [selected, setSelected] = useState("");
  const [smartText, setSmartText] = useState("");
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [character, setCharacter] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <table style={{ marginRight: 48 }}>
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
              {music_list &&
                music_list
                  // .filter((m) => m.detail)
                  .map((m) => (
                    <tr
                      key={m.banner}
                      style={
                        m.detail === selected
                          ? { backgroundColor: "lightGray" }
                          : {}
                      }
                    >
                      <td>{m.title || ""}</td>
                      <td>{m.title || ""}</td>
                      <td>{m.title || ""}</td>
                      <td>{title}</td>
                      <td>{m.detail && <a href={m.detail}>楽曲紹介</a>}</td>
                      <td>{m.banner && <a href={m.banner}>バナー</a>}</td>
                      <td>
                        <button
                          onClick={() => m.detail && setSelected(m.detail)}
                        >
                          選択
                        </button>
                      </td>
                    </tr>
                  ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 200 }}>
        <textarea
          style={{ height: 100 }}
          value={smartText}
          onChange={(event) => setSmartText(event.target.value)}
        />
        <button
          onClick={() => {
            const parts = smartText.split("\t");
            console.log(smartText.split("\t"));
            setGenre(parts[0]);
            setName(parts[1]);
            setArtist(parts[2]);
            setCharacter(parts[9]);
          }}
        >
          スマート入力
        </button>
        <label>
          ジャンル名
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </label>
        <label>
          曲名
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          アーティスト
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label>
          キャラクター
          <input
            type="text"
            value={character}
            onChange={(event) => setCharacter(event.target.value)}
          />
        </label>
        <button
          disabled={!(genre && name && artist && character)}
          onClick={() => {
            if (genre && name && artist && character) {
              fetch("/api/update", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  detail: selected,
                  genre,
                  name,
                  artist,
                  character,
                }),
              });
            }
          }}
        >
          確認
        </button>
      </div>
    </div>
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

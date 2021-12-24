// for 22~24
(function () {
  const arr = Array.from(
    document.querySelectorAll("ul.musiclist > li > div")
  ).map((x) => {
    if (x.firstChild.nodeName === "IMG") {
      //楽曲紹介のページがない
      return {
        banner: x.firstChild.src,
      };
    } else {
      return {
        detail: x.firstChild.href,
        banner: x.firstChild.firstChild.src,
      };
    }
  });
  console.log(JSON.stringify(arr));
})();

// for 21(205), 20(183), 18(265), 17(260)
(function () {
  const arr = Array.from(document.querySelectorAll("img[width='183']")).map(
    (x) => {
      if (x.parentNode.nodeName === "A") {
        return {
          detail: x.parentNode.href,
          banner: x.src,
        };
      } else {
        return {
          banner: x.src,
        };
      }
    }
  );
  console.log(arr.length);
  console.log(JSON.stringify(arr));
})();

// for 19
(function () {
  const arr = Array.from(document.querySelectorAll("img[width='257']")).map(
    (x) => {
      const banner =
        "http://web.archive.org/web/20180920035327im_/" +
        x.src.replace(".gif", "_1.gif");
      if (x.parentNode.nodeName === "A") {
        return {
          detail:
            "http://web.archive.org/web/20180920035327_id/" + x.parentNode.href,
          banner,
        };
      } else {
        return {
          banner,
        };
      }
    }
  );
  console.log(arr.length);
  console.log(JSON.stringify(arr));
})();

// for pmp 1
(function () {
  const arr = Array.from(
    document.querySelectorAll("#CharactersIndexLayer > a")
  ).map((x) => ({
    detail: "https://web.archive.org/web/20160613195301id_/" + x.href,
  }));
  console.log(JSON.stringify(arr));
})();

// for 16

(function () {
  const arr = Array.from(document.querySelectorAll("map > area")).map((x) => ({
    detail: x.href,
    genre: x.title,
  }));
  console.log(JSON.stringify(arr));
})();

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

// for 21
(function () {
  const arr = Array.from(document.querySelectorAll("img[width='205']")).map(
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
  console.log(JSON.stringify(arr));
})();

// for 20
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

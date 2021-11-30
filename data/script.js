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

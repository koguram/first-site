// 今のところ、このサイトは CSS のアニメーションだけで
// ぐにょぐにょ背景が動く構成になっています。
// JavaScript では、こくらくん好みの「追加の動き」を足していけます。

// 例: マウスに反応して少しだけパララックスを追加するサンプル
// 実際に有効化したいときは、下のコメントアウトを外して使ってね。

/*
const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", (e) => {
  const xRate = (e.clientX / window.innerWidth - 0.5) * 2;
  const yRate = (e.clientY / window.innerHeight - 0.5) * 2;

  blobs.forEach((blob, i) => {
    const strength = 6 + i * 4; // ブロブごとに揺れ幅を変える
    blob.style.translate = `${xRate * strength}px ${yRate * strength}px`;
  });
});
*/

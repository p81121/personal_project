window.onload = function () {
  const placies = [
    {
      id: "audioroom",
      placeImg: "./image/about_us/視聽室.jpg",
      placeContent:
        "各公益團體或相關非營利組織開會或是辦理婦女福利研習、團體活動或視聽影音賞析最佳場所，只要是針對「對婦女福利等公益活動皆可申請使用」。",
    },
    {
      id: "bookcrossing",
      placeImg: "./image/about_us/漂書區.jpg",
      placeContent:
        "燈光明亮氣氛佳是放漂人想與大家分享的漂書區，漂書區裡喜歡的書籍可以直接帶回家收藏， 一起享受閱讀的樂趣。",
    },
    {
      id: "readingroom",
      placeImg: "./image/about_us/閱覽室.jpg",
      placeContent:
        "最具書香氣息的閱覽室，來場舒適的閱讀午後時光，還有性別專業研究書籍與影音可供探索。",
    },
    {
      id: "showroom",
      placeImg: "./image/about_us/展覽館.jpg",
      placeContent:
        "每年都有規劃不同的藝文展覽，盡情享受展覽的視覺饗宴，和豐富有趣 的各式新知，帶給你充實的一天。",
    },
  ]

  document.getElementById("audioroom").addEventListener("click", clickMapArea)
  document
    .getElementById("bookcrossing")
    .addEventListener("click", clickMapArea)
  document.getElementById("readingroom").addEventListener("click", clickMapArea)

  document.getElementById("showroom").addEventListener("click", clickMapArea)

  function clickMapArea(event) {
    changePlaceInfo(event)
    setActivityStatus(event)
  }

  function changePlaceInfo(event) {
    const place = placies.find((item) => item.id == event.srcElement.id)

    document.getElementById("place_img").src = place.placeImg
    document.getElementById("place_content").textContent = place.placeContent
  }

  function setActivityStatus(event) {
    // 清除舊的狀態
    placies.forEach((item) => {
      document
        .getElementById(item.id)
        .childNodes[1].classList.remove("activity")
    })

    // 加上目前這個的特效
    document
      .getElementById(event.srcElement.id)
      .childNodes[1].classList.add("activity")
  }
}

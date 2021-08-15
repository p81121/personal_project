window.onload = function () {
  const youtubeInfos = [
    {
      category: "cedaw",
      videoName: "第一集-互相幫忙篇",
      url: "https://www.youtube.com/embed/04anNYHnmrk",
    },
    {
      category: "cedaw",
      videoName: "第二集 出嫁篇",
      url: "https://www.youtube.com/embed/A4vupGnmEJY",
    },
    {
      category: "cedaw",
      videoName: "第三集 家務分工篇",
      url: "https://www.youtube.com/embed/j-mP_wIZ9mU",
    },
    {
      category: "cedaw",
      videoName: "第四集 平等篇",
      url: "https://www.youtube.com/embed/Rr-pfpeFywo",
    },
    {
      category: "cedaw",
      videoName: "第五集 位置篇",
      url: "https://www.youtube.com/embed/ux4sM5xZiSw",
    },
    {
      category: "cedaw",
      videoName: "第六集 發揮潛能篇",
      url: "https://www.youtube.com/embed/-W1EYEWJwgc",
    },
    {
      category: "anti_gender",
      videoName: "第一集",
      url: "https://www.youtube.com/embed/aqyYOmXoFTo",
    },
    {
      category: "anti_gender",
      videoName: "第二集",
      url: "https://www.youtube.com/embed/Ms9IKt0jsDA",
    },
    {
      category: "anti_gender",
      videoName: "第三集",
      url: "https://www.youtube.com/embed/9S1kJ3E5-Fk",
    },
    {
      category: "anti_gender",
      videoName: "第四集",
      url: "https://www.youtube.com/embed/H5rmjXiua20",
    },
    {
      category: "anti_gender",
      videoName: "第五集",
      url: "https://www.youtube.com/embed/UoKvsA-ZpFs",
    },
  ]

  cedawListHtml = ""
  youtubeInfos
    .filter((item) => item.category == "cedaw")
    .forEach((item) => {
      cedawListHtml += `<div class="video_item"><div class="dot"></div><div id="${item.category}-${item.videoName}" >${item.videoName}</div></div>`
    })
  document.getElementById("cedaw-list").innerHTML = cedawListHtml

  antiListHtml = ""
  youtubeInfos
    .filter((item) => item.category == "anti_gender")
    .forEach((item) => {
      antiListHtml += `<div class="video_item"><div class="dot"></div><div id="${item.category}-${item.videoName}" >${item.videoName}</div></div>`
    })
  document.getElementById("anti_gender-list").innerHTML =
    antiListHtml + document.getElementById("anti_gender-list").innerHTML

  youtubeInfos.forEach((item) => {
    console.log(`${item.category}-${item.videoName}`)
    document
      .getElementById(`${item.category}-${item.videoName}`)
      .addEventListener("click", clickVideo)
  })

  function clickVideo(event) {
    changeYoutubeUrl(event)
    addDot(event)
  }

  function changeYoutubeUrl(event) {
    const currentVideo = youtubeInfos.find(
      (item) => `${item.category}-${item.videoName}` == event.srcElement.id
    )

    document.getElementById("youtube").src = currentVideo.url
  }

  function addDot(event) {
    youtubeInfos.forEach((item) => {
      console.log(`${item.category}-${item.videoName}`)

      document
        .getElementById(`${item.category}-${item.videoName}`)
        .parentElement.getElementsByClassName("dot")[0]
        .classList.remove("activity")
    })

    document
      .getElementById(event.srcElement.id)
      .parentElement.getElementsByClassName("dot")[0]
      .classList.add("activity")
  }
}

/* eslint-disable */

function RadarChart() {
  new Chart(document.getElementById("radar-chart"), {
    type: "radar",
    data: {
      labels: ["병상수", "의료인수", "입원실수"],
      datasets: [
        {
          label: "재단법인아산사회복지재단 서울아산병원",
          fill: true,
          backgroundColor: "rgba(204,51,102,0.2)",
          borderColor: "rgba(204,51,102,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(204,51,102,1)",
          data: [2743, 6167, 1002],
        },
        {
          label: "학교법인연세대학교의과대학세브란스병원",
          fill: true,
          backgroundColor: "rgba(0, 102,204,0.2)",
          borderColor: "rgba(0, 102,204,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0, 102,204,1)",
          data: [2453, 4837, 824],
        },
        {
          label: "삼성서울병원",
          fill: true,
          backgroundColor: "rgba(0,153,102,0.2)",
          borderColor: "rgba(0,153,102,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0,153,102,1)",
          data: [1997, 4184, 648],
        },
        {
          label: "서울대학교병원",
          fill: true,
          backgroundColor: "rgba(255,153,0,0.2)",
          borderColor: "rgba(255,153,0,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,153,0,1)",
          data: [1789, 3708, 554],
        },
        {
          label: "학교법인가톨릭학원가톨릭대학교서울성모병원",
          fill: true,
          backgroundColor: "rgba(102, 51, 153,0.2)",
          borderColor: "rgba(102, 51, 153,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(102, 51, 153,1)",
          data: [1362, 2848, 457],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "병상수 기준 Top5 병원 레이더 차트",
      },
    },
  });
}

export default RadarChart;

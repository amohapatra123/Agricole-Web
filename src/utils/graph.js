export const data = {
  labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
  datasets: [
    {
      label: "# Product 1",
      data: [5, 7, 3, 10, 15, 20, 30, 22, 21, 27],
      fill: false,
      borderColor: "#826AF9",
      yAxisID: "y-axis-1",
    },
    {
      label: "# Product 2",
      data: [5, 10, 12, 20, 22, 18, 29, 26, 36, 29],
      fill: false,

      borderColor: "#FF6C40",
      yAxisID: "y-axis-2",
    },
    {
      label: "# Product 3",
      data: [5, 8, 15, 26, 17, 20, 27, 26, 30, 29],
      fill: false,

      borderColor: "#FFE700",
      yAxisID: "y-axis-3",
    },
  ],
};

export const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-3",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const RateSvg = ({ rate }) => {
  return (
    <svg
      width="100"
      height="24"
      viewBox="0 0 167 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ratings">
        <path
          id="Vector"
          d="M11.4461 1.83229L8.31618 7.77058L1.31335 8.72591C0.0575409 8.89635 -0.445743 10.345 0.464961 11.1748L5.53135 15.7945L4.33305 22.3203C4.11736 23.4999 5.44507 24.3834 6.55709 23.8318L12.8218 20.7505L19.0864 23.8318C20.1985 24.379 21.5262 23.4999 21.3105 22.3203L20.1122 15.7945L25.1786 11.1748C26.0893 10.345 25.586 8.89635 24.3302 8.72591L17.3274 7.77058L14.1974 1.83229C13.6366 0.773803 12.0117 0.760348 11.4461 1.83229Z"
          fill={rate >= 2 ? "#F8D714" : "#D3BCA2"}
        />
        <path
          id="Vector_2"
          d="M46.7852 1.83229L43.6553 7.77058L36.6525 8.72591C35.3967 8.89635 34.8934 10.345 35.8041 11.1748L40.8705 15.7945L39.6722 22.3203C39.4565 23.4999 40.7842 24.3834 41.8962 23.8318L48.1609 20.7505L54.4256 23.8318C55.5376 24.379 56.8653 23.4999 56.6496 22.3203L55.4513 15.7945L60.5177 11.1748C61.4284 10.345 60.9251 8.89635 59.6693 8.72591L52.6665 7.77058L49.5365 1.83229C48.9757 0.773803 47.3508 0.760348 46.7852 1.83229Z"
          fill={rate >= 4 ? "#F8D714" : "#D3BCA2"}
        />
        <path
          id="Vector_3"
          d="M82.1244 1.83229L78.9944 7.77058L71.9916 8.72591C70.7358 8.89635 70.2325 10.345 71.1432 11.1748L76.2096 15.7945L75.0113 22.3203C74.7956 23.4999 76.1233 24.3834 77.2353 23.8318L83.5 20.7505L89.7647 23.8318C90.8767 24.379 92.2044 23.4999 91.9887 22.3203L90.7904 15.7945L95.8568 11.1748C96.7675 10.345 96.2642 8.89635 95.0084 8.72591L88.0056 7.77058L84.8756 1.83229C84.3148 0.773803 82.69 0.760348 82.1244 1.83229Z"
          fill={rate >= 6 ? "#F8D714" : "#D3BCA2"}
        />
        <path
          id="Vector_4"
          d="M117.463 1.83229L114.334 7.77058L107.331 8.72591C106.075 8.89635 105.572 10.345 106.482 11.1748L111.549 15.7945L110.35 22.3203C110.135 23.4999 111.462 24.3834 112.574 23.8318L118.839 20.7505L125.104 23.8318C126.216 24.379 127.544 23.4999 127.328 22.3203L126.13 15.7945L131.196 11.1748C132.107 10.345 131.603 8.89635 130.348 8.72591L123.345 7.77058L120.215 1.83229C119.654 0.773803 118.029 0.760348 117.463 1.83229Z"
          fill={rate >= 8 ? "#F8D714" : "#D3BCA2"}
        />
        <path
          id="Vector_5"
          d="M152.803 0.798919L149.673 6.73721L142.67 7.69254C141.414 7.86298 140.911 9.31167 141.821 10.1414L146.888 14.7611L145.69 21.2869C145.474 22.4665 146.802 23.3501 147.914 22.7984L154.178 19.7171L160.443 22.7984C161.555 23.3456 162.883 22.4665 162.667 21.2869L161.469 14.7611L166.535 10.1414C167.446 9.31167 166.942 7.86298 165.687 7.69254L158.684 6.73721L155.554 0.798919C154.993 -0.259568 153.368 -0.273023 152.803 0.798919Z"
          fill={rate >= 9 ? "#F8D714" : "#D3BCA2"}
        />
      </g>
    </svg>
  );
};

export default RateSvg;

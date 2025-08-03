const Ripples = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <circle
        fill="none"
        stroke-opacity="1"
        stroke="#6b788457"
        stroke-width=".5"
        cx="100"
        cy="100"
        r="0">
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1.8"
          values="1;80"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          repeatCount="1"></animate>
        <animate
          attributeName="stroke-width"
          calcMode="spline"
          dur="1.8"
          values="0;25"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          repeatCount="1"></animate>
        <animate
          attributeName="stroke-opacity"
          calcMode="spline"
          dur="1.8"
          values="1;0"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          repeatCount="1"></animate>
      </circle>
      <circle
        fill="none"
        stroke-opacity="1"
        stroke="#6b788457"
        stroke-width=".5"
        cx="100"
        cy="100"
        r="0">
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1.8"
          values="1;80"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          begin="0.3"
          repeatCount="1"></animate>
        <animate
          attributeName="stroke-width"
          calcMode="spline"
          dur="1.8"
          values="0;25"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          begin="0.3"
          repeatCount="1"></animate>
        <animate
          attributeName="stroke-opacity"
          calcMode="spline"
          dur="1.8"
          values="1;0"
          keyTimes="0;1"
          keySplines="0 .2 .5 1"
          begin="0.3"
          repeatCount="1"></animate>
      </circle>
    </svg>
  );
};

export default Ripples;

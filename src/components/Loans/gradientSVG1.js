function GradientSVG() {
    const idCSS = "hello1";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#ff009d" />
            <stop offset="85.56%" stopColor="#e41e28" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;
  
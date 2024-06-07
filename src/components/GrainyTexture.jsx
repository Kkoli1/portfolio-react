import "../App.css";

function GrainyTexture() {
  return (
    <div className="grainy-texture-container">
    <div
      className="grainy-texture"
      style={{
        backgroundImage: `url(${
          window.innerWidth < 800
            ? "./assets/grainMobile.png"
            : "./assets/grain2.png"
        })`,
      }}
    ></div>
    </div>
  );
}

export default GrainyTexture;

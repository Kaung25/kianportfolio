import "./styles.css";

const rive = require("@rive-app/canvas");

const r = new rive.Rive({
  src: "Neighborhood.riv",
  canvas: document.getElementById("canvas"),
  stateMachines: "State Machine 1",
  autoplay: true,
  automaticallyHandleEvents: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

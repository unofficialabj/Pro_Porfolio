import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        background: {
          color: "rgb(0,0,20)",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: true, force: 40, smooth: 80 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#fff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            animation: {
              count: 0,
              enable: true,
              speed: 2.22,
              decay: 0,
              delay: 0,
              sync: true,
              mode: "auto",
              startValue: "random",
              destroy: "none",
              minimumValue: 0,
            },
            value: {
              min: 0,
              max: 1,
            },
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
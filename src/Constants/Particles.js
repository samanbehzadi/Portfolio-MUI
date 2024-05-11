export const links = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#cc11ff",
        },
        links: {
            color: "#ac23cf",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1.1,
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
            value: 0.5,
        },
        shape: {
            type: "star",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export const hexagon = {
    particles: {
      color: {
        value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"]
      },
      move: {
        enable: true,
        outModes: "out",
        speed: { min: 1, max: 3 },
        path: {
          enable: true,
          options: {
            waveLength: { min: 3, max: 7 },
            waveHeight: { min: 1, max: 5 }
          },
          generator: "zigZagPathGenerator"
        },
        trail: {
          enable: true,
          length: 20,
          fill: {
            color: "#000000"
          }
        }
      },
      number: {
        value: 80
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 3
      }
    },
    background: {
      color: "#000000"
    }
  };
  
  
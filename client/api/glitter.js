export default function() {
  console.log('doing init glitter')
  // Little Canvas things
  var canvas = document.querySelector("#canvas"),
      ctx = canvas.getContext('2d');


  const doit = function(event) {
    const x = window.innerWidth / 2;
    const y = 300;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
  }

  // Configuration
  var config = {
    particleNumber: 600,
    maxParticleSize: 7,
    maxSpeed: 40,
    colorVariation: 50
  };

  // Colors
  var colorPalette = {
      bg: {r:12,g:9,b:29},
      matter: [
        {r:158,g:9,b:22}, // Red
        // {r:13,g:101,b:247}, // Blue
        {r:114,g:100,b:66}, // 'Camel' eg dark gold
        {r:255,g:255,b:255} // White
      ]
  };

  // Some Variables hanging out
  var particles = [],
      centerX = canvas.width / 2,
      centerY = canvas.height / 2,
      drawBg,

  // Draws the background for the canvas, because space
  drawBg = function (ctx, color) {
      ctx.fillStyle = "transparent";
      ctx.fillRect(0,0,canvas.width,canvas.height);
  };

  // Set Canvas to window size
  var size = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  // In case of resize
  window.addEventListener("resize", size);

  // Particle Constructor
  var Particle = function (x, y) {
      // X Coordinate
      this.x = x || Math.round(Math.random() * canvas.width);
      // Y Coordinate
      this.y = y || Math.round(Math.random() * canvas.height);
      // Radius of the space dust
      this.r = Math.ceil(Math.random() * config.maxParticleSize);
      // Color of the rock, given some randomness
      this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
      // Speed of which the rock travels
      this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
      // Direction the Rock flies
      this.d = Math.round(Math.random() * 360);
  };

  // Provides some nice color variation
  // Accepts an rgba object
  // returns a modified rgba object or a rgba string if true is passed in for argument 2
  var colorVariation = function (color, returnString) {
      var r,g,b,a, variation;
      r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.r);
      g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.g);
      b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.b);
      a = Math.random() + .5;
      if (returnString) {
          return "rgba(" + r + "," + g + "," + b + "," + a + ")";
      } else {
          return {r,g,b,a};
      }
  };

  // Used to find the rocks next point in space, accounting for speed and direction
  var updateParticleModel = function (p) {
      var a = 180 - (p.d + 90); // find the 3rd angle
      p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
      p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
      return p;
  };

  // Just the function that physically draws the particles
  // Physically? sure why not, physically.
  var drawParticle = function (x, y, r, c) {
      ctx.beginPath();
      ctx.fillStyle = c;
      ctx.arc(x, y, r, 0, 2*Math.PI, false);
      ctx.fill();
      ctx.closePath();
  };

  // Remove particles that aren't on the canvas
  var cleanUpArray = function () {
      particles = particles.filter((p) => {
        return (p.x > -100 && p.y > -100);
      });
  };


  var initParticles = function (numParticles, x, y) {
      for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle(x, y));
      }
      particles.forEach((p) => {
          drawParticle(p.x, p.y, p.r, p.c);
      });
  };

  // That thing
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
       window.webkitRequestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       function(callback) {
          window.setTimeout(callback, 1000 / 60);
       };
  })();


  // Our Frame function
  var frame = function () {
    // Draw background first
    //drawBg(ctx, colorPalette.bg);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Update Particle models to new position
    particles.map((p) => {
      return updateParticleModel(p);
    });
    // Draw em'
    particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
    });
    // Play the same song? Ok!
    window.requestAnimFrame(frame);
  };

  // First Frame
  size();
  frame();

  return doit;
};

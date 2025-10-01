window.addEventListener("load", function() {
  const box = document.querySelector(".inside");
  const skills = document.querySelectorAll(".skill");
  const boxSize = box.clientWidth;

  const objs = [];

  skills.forEach(function(skill) {
    const x = Math.random() * (boxSize - 50);
    const y = Math.random() * (boxSize - 50);
    const dx = (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1);
    const dy = (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1);

    skill.style.left = x + "px";
    skill.style.top = y + "px";

    objs.push({ el: skill, x: x, y: y, dx: dx, dy: dy });
  });

  function animate() {
    objs.forEach(function(obj) {
      obj.x += obj.dx;
      obj.y += obj.dy;

      if (obj.x <= 0 || obj.x + 50 >= boxSize) obj.dx *= -1;
      if (obj.y <= 0 || obj.y + 50 >= boxSize) obj.dy *= -1;

      obj.el.style.left = obj.x + "px";
      obj.el.style.top = obj.y + "px";
    });
    requestAnimationFrame(animate);
  }

  animate();
});
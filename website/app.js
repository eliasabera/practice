const main = document.querySelector(".main");
const box = document.querySelectorAll(".box");
const conatiner = document.querySelector(".boxs");
box.forEach((boxs) => {
  boxs.addEventListener("click", (b) => {
    box.forEach((b) => {
      b.style.transform = "translateY(-200%)";
    });
    conatiner.style.display = "none";
    boxs.classList.add("fullscreen");
    boxs.style.transform = "translateY(0)";
    boxs.style.animation = "";
    main.style.display = "block";
    main.appendChild(boxs);
  });
});

conatiner.addEventListener("mousemove", (event) => {
  box.forEach((e) => {
    const boxImage = e.querySelector(".boxImage");
    const { left, top, width, height } = e.getBoundingClientRect();

    const x = event.clientX - left - width / 2;
    const y = event.clientY - top - height / 2;

    const moveX = (x / width) * 20;
    const moveY = (y / height) * 20;

    boxImage.style.transform = `translate(${moveX}px,${moveY}px)`;
  });
});

// Accessible interactive engineering artwork: selecting a marker explains that system layer.
document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("#scene");
  const info = document.querySelector("#scene-info");
  if (!scene || !info) return;
  const index = info.querySelector(".scene-info-index");
  const title = info.querySelector("strong");
  const detail = info.querySelector("p");
  const markers = [...scene.querySelectorAll(".scene-hotspot")];
  const defaultContent = { index: "ENGINEERING LAYERS", title: "From silicon to system", detail: "Select a marker to explore the work behind the hardware." };
  const reset = () => {
    markers.forEach(marker => { marker.classList.remove("is-active"); marker.setAttribute("aria-pressed", "false"); });
    index.textContent = defaultContent.index; title.textContent = defaultContent.title; detail.textContent = defaultContent.detail;
  };
  markers.forEach((marker, i) => {
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => {
      const alreadyActive = marker.classList.contains("is-active");
      reset();
      if (alreadyActive) return;
      marker.classList.add("is-active"); marker.setAttribute("aria-pressed", "true");
      index.textContent = `ENGINEERING LAYER / 0${i + 1}`;
      title.textContent = marker.dataset.title; detail.textContent = marker.dataset.detail;
    });
    marker.addEventListener("mouseenter", () => {
      scene.style.setProperty("--spot-x", `${marker.offsetLeft + marker.offsetWidth / 2}px`);
      scene.style.setProperty("--spot-y", `${marker.offsetTop + marker.offsetHeight / 2}px`);
    });
  });
});

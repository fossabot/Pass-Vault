import store from "../store";

async function showLoader(show, color, size, opacity) {
  await store.dispatch("showPreloader", {
    show,
    color,
    size,
    opacity
  });
}
export default {
  preloader: showLoader
};

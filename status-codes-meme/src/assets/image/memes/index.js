const memes = import.meta.glob("./*.webp", {
  eager: true,
  import: "default",
});

export default memes;
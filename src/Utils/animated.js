// animated.js

window.onload = function() {
  // Posiciones iniciales para las imágenes
  let initialImg3Left = "10vw";
  let initialImg3Bottom = "10vh";
  let initialImg4Left = "20vw";
  let initialImg4Bottom = "20vh";

  // Posiciones finales para las imágenes
  let targetImg3Left = "40vw";
  let targetImg3Bottom = "50vh";
  let targetImg4Left = "77vw";
  let targetImg4Bottom = "30vh";

  // Posiciones iniciales para los cuadros de texto
  let initialText1Left = "2vw";
  let initialText1Bottom = "2vh";
  let initialText2Left = "2vw";
  let initialText2Bottom = "2vh";

  // Posiciones finales para los cuadros de texto
  let targetText1Left = "20vw";
  let targetText1Bottom = "70vh";
  let targetText2Left = "60vw";
  let targetText2Bottom = "60vh";

  // Guardar las posiciones iniciales y finales en el :root
  document.documentElement.style.setProperty('--img3-initial-left', initialImg3Left);
  document.documentElement.style.setProperty('--img3-initial-bottom', initialImg3Bottom);
  document.documentElement.style.setProperty('--img4-initial-left', initialImg4Left);
  document.documentElement.style.setProperty('--img4-initial-bottom', initialImg4Bottom);

  document.documentElement.style.setProperty('--img3-target-left', targetImg3Left);
  document.documentElement.style.setProperty('--img3-target-bottom', targetImg3Bottom);
  document.documentElement.style.setProperty('--img4-target-left', targetImg4Left);
  document.documentElement.style.setProperty('--img4-target-bottom', targetImg4Bottom);

  // Guardar las posiciones iniciales y finales de los cuadros de texto
  document.documentElement.style.setProperty('--text1-initial-left', initialText1Left);
  document.documentElement.style.setProperty('--text1-initial-bottom', initialText1Bottom);
  document.documentElement.style.setProperty('--text2-initial-left', initialText2Left);
  document.documentElement.style.setProperty('--text2-initial-bottom', initialText2Bottom);

  document.documentElement.style.setProperty('--text1-target-left', targetText1Left);
  document.documentElement.style.setProperty('--text1-target-bottom', targetText1Bottom);
  document.documentElement.style.setProperty('--text2-target-left', targetText2Left);
  document.documentElement.style.setProperty('--text2-target-bottom', targetText2Bottom);
}

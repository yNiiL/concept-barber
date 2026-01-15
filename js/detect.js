function detectarDispositivo() {
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
    return "mobile";
  } else {
    return "desktop";
  }
}

const dispositivo = detectarDispositivo();
document.body.classList.add(dispositivo);
console.log("Visitante usando:", dispositivo);

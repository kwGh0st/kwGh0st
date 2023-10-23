let i = 0;
const txt = "i there! I'm Karol, a programmer. ";
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("write-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

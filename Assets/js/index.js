const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// document.getElementById("enviar-por-correo").onclick = function () {
//   alert("El correo fue enviado correctamente...");
// };

$("#enviarCorreo").click(function () {
  alert("El correo fue enviado correctamente...");
});

$("#cambio-a-rojo1").dblclick(function () {
  $(this).css({
    color: "red",
  });
});

$("#cambio-a-rojo2").dblclick(function () {
  $(this).css({
    color: "red",
  });
});

$(".card-title").click(function () {
  $(".card-text").toggle("slow");
});

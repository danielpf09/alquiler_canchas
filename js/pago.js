// Función para descargar la factura en PDF
function downloadInvoice() {
    // Importación del módulo jsPDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Obtención de los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;

    // Añadir contenido al PDF
    pdf.text("Factura de Pago", 10, 10);
    pdf.text(`Nombre Completo: ${name}`, 10, 20);
    pdf.text(`Correo Electrónico: ${email}`, 10, 30);
    pdf.text(`Número de Tarjeta: ${cardNumber.replace(/\d(?=\d{4})/g, "*")}`, 10, 40); // Oculta parte del número de tarjeta
    pdf.text(`Fecha de Expiración: ${expiryDate}`, 10, 50);
    pdf.text(`Dirección de Facturación: ${address}`, 10, 60);
    pdf.text(`Ciudad: ${city}`, 10, 70);
    pdf.text(`Código Postal: ${zip}`, 10, 80);

    // Descargar el PDF
    pdf.save("Factura_Pago.pdf");
}

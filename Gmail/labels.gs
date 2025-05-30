function testLabel(etiqueta) {
  const nombre = createLabel(etiqueta);
  const label = GmailApp.getUserLabelByName(nombre);
  Logger.log(label);

  const emails = GmailApp.getInboxThreads();
  emails.forEach((hilo) => {
    Logger.log(hilo.getFirstMessageSubject());
    const val = hilo.getFirstMessageSubject()

    if (val.includes("Prueba")) {
      hilo.addLabel(label);
    }
  })
}

function createLabel() {
  const nombre = "Nueva Etiqueta Apps Script";
  const label = GmailApp.createLabel(nombre);
  return nombre;
}

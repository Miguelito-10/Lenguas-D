function lecturaCorrecta(codigoText, codgioObjeto) {
    // handle the scanned code as you like, for example:
    Swal.fire(codigoText);
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function errorLectura(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    //console.warn(`Code scan error = ${error}`);
  }
  
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  html5QrcodeScanner.render(lecturaCorrecta, errorLectura);
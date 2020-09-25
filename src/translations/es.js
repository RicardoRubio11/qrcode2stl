export default {
  //
  //  Local name of the language
  //
  languageLocalName: 'Spanish',

  //
  // General
  //
  title: 'Generador de código 3D',
  subtitle: 'Exportar códigos QR o códigos de Spotify como STL para impresión 3D',
  preview: 'Vista Previa',
  controlsHint: 'Usa tu mouse para rotar',
  changeLanguage: 'Cambiar Idioma',
  contributeTranslation: 'Contribuir con una traducción',
  generateButton: 'Generar Modelo 3D',
  scrollDownForGuide: 'Desplácese hacia abajo para obtener una guía sobre cómo imprimir su código QR.',
  printabilityWarning: 'Advertencia para la capacidad de impresión en 3D',
  printabilityWarningBody: 'Al menos un borde del elemento más pequeño en el modelo 3D es muy pequeño: {dimensiones}. Dependiendo de su configuración, esto podría dificultar la impresión.',
  supportMe: 'Apoyame',
  viewOnGithub: 'Ver en GitHub',
  shareButtonTitle: 'Comparte esta página',
  file: 'archivo',
  no: 'no',
  yes: 'si',
  top: 'superior',
  bottom: 'inferior',
  left: 'izquierda',
  right: 'derecha',
  content: 'contenido',
  min: 'min',
  max: 'max',
  thankYou: 'Muchas gracias por el apoyo. ¡Eres grandioso!',
  promotionTitle: '¿Quieres empezar un nuevo pasatiempo? ¿Busca una segunda / tercera impresora 3d? 😉',
  promotionSubtitle: 'Aquí hay algunas impresoras 3D y accesorios de impresora 3D recomendados para cubrir sus necesidades.',
  corner: 'esquina',
  isGenerating: 'Generando Modelo 3D ...',
  headerShareNotice: 'Comparte tu código con esta URL',

  //
  // QR Code Options Panel
  //
  qrCodeOptionsTitle: 'Opciones de Código QR',
  qrCodeTextPlaceholder: 'El texto de su código QR, p. Ej. Hola Mundo o https://flxn.de',
  errorCorrection: 'Error Correction',
  errorCorrectionHelp: 'Cuanto mayor sea el nivel de corrección de errores, más denso será el código QR.',
  optionalFieldsHint: 'No es necesario completar todos los campos.',
  // Wifi
  ssidPlaceholder: 'El nombre de la red Wifi',
  password: 'Contraseña',
  passwordPlaceholder: 'La contraseña de la red Wifi',
  security: 'Seguridad',
  hidden: 'Oculta',
  hiddenText: 'SSID esta oculta',
  // Contact
  contact: 'Contacto',
  yourName: 'Tu Nombre',
  firstname: 'Nombre',
  lastname: 'Apellido',
  organization: 'Organización',
  role: 'Papel',
  numbers: 'Números',
  cellphone: 'Celular',
  phone: 'Teléfono',
  street: 'Calle',
  city: 'Ciudad',
  state: 'Estado',
  // E-Mail
  recipient: 'Destinatario',
  recipientPlaceholder: 'La dirección que debe recibir el correo.',
  subject: 'Asunto',
  subjectPlaceholder: 'La línea de asunto del correo electrónico',
  body: 'Contenido',
  bodyPlaceholder: 'El contenido del correo electrónico',
  // SMS
  phonePlaceholder: 'El número de teléfono del destinatario',
  smsMessage: 'Mensaje',
  smsMessagePlaceholder: 'El mensaje SMS',

  //
  // Spotify Options Panel
  //
  spotifyOptions: 'Opciones de código de Spotify',
  spotifyUri: 'Spotify URI/Enlace',
  spotifyUriHelp: 'Puede obtener el URI de Spotify para una pista / álbum / lista de reproducción / usuario de Spotify haciendo clic en "Compartir" y luego en "URI".',
  spotifyCodeHeightInfo: 'Los códigos de Spotify tienen una relación de aspecto fija de 4: 1',

  //
  // 3D Model Options Panel
  //
  modelOptions: 'Opciones de Modelo 3D',
  base: 'Base',
  width: 'Ancho',
  height: 'Alto',
  depth: 'Profundo',
  cornerRadius: 'Radio de Esquina',
  border: 'Contorno',
  borderAroundBase: 'Agrega un contorno alrededor de la base',
  margin: 'Margen',
  block: 'Bloque',
  style: 'Estilo',
  shape: 'Forma',
  rectangle: 'rectángulo',
  roundedRectangle: 'rectángulo redondeado',
  square: 'cuadrado',
  round: 'redondo',
  size: 'Tamaño',
  blockSizeHelp: `
  Esta configuración modifica el tamaño de los bloques de códigos QR individuales.
  Juegue con este valor para lograr una apariencia visual única, pero tenga en cuenta que esto podría afectar la legibilidad del código QR. \\
  Verifique la vista previa con su teléfono antes de imprimir para ver si no se excedió de los limites.
  Manténgase al 100% si no está seguro.
  Si aumenta este valor por encima del 100% (por ejemplo, 120%), los bloques formarán islas conectadas que harán que el código QR sea más fácil de imprimir.`,
  icon: 'Icono',
  noIcon: 'Sin Icono',
  iconSizeHelp: `
  El tamaño del icono en relación con el ancho total del código QR.
  El icono abusa de la corrección de errores incorporada del código qr. Si es demasiado grande, es posible que el código no sea legible.
  Si desea tener un icono grande pero su teléfono no puede leer el código QR, puede intentar aumentar el Nivel de corrección de errores.`,
  text: 'Texto',
  textOnEdge: 'Agrega un texto de título personalizado a tu código QR.',
  placement: 'Ubicacion',
  theText: 'El Texto',
  cityMode: 'QR-Ciudad',
  cityModeText: 'Altera aleatoriamente la altura de los bloques.',
  invert: 'Invertir',
  invertText: 'Invierte la estructura del código',
  keychain: 'Llavero',
  keychainHelp: 'Coloque un orificio en el costado de la etiqueta (por ejemplo, para colocarlo en su llavero).',
  mirrorHoles: 'Agujeros Espejo',
  mirrorHolesHelp: 'Refleje los orificios en el lado opuesto (por ejemplo, para fijarlo con tornillos).',
  keychainHoleDiameter: 'Diámetro del agujero',

  //
  // Export Settings
  //
  exportTypeHelp: 'Simplemente deje esto como "binario" para mantener el tamaño del archivo bajo. Si su software tiene problemas con el archivo generado, puede intentar cambiar esta opción.',
  exportSeparatePartsHelp: 'Si se establece en "sí", la base y el código qr se guardarán como dos partes separadas para las impresoras con impresión de doble extrusión. Su navegador puede solicitar permisos para descargar varios archivos.',
  separateParts: 'Partes Separadas',
  saveAsButton: 'Guardar como STL',

  //
  // Print Guide
  // with HTML Tags included!
  //
  printGuideTitle: 'Guía de impresión 3D',
  printGuideSubtitle: '¿Cómo imprimir un código QR de dos colores con una impresora 3d de un solo extrusor?',
  printGuideWIPInfo: 'Esta guía es un trabajo en progreso.',
  printGuideIntro: `
  Puede imprimir objetos de varios colores incluso con una sola extrusora intercambiando el filamento en capas específicas.<br/>
  Podemos utilizar este método para imprimir la base de nuestro código QR y la parte del código QR real en la parte superior en dos colores diferentes.<br/>
  Esta técnica es lo que hace que los códigos QR imprimibles en 3D sean posibles en primer lugar.<br/>
  El proceso es diferente según el software de corte que esté utilizando.<br/>
  En esta guía me centraré únicamente en Cura y PrusaSlicer y no asumo ninguna responsabilidad si de alguna manera daña tu impresora en el proceso.<br/>`,
  printGuideSupportWarningTitle: 'Tenga en cuenta: ¡No todas las impresoras / firmwares admiten la funcionalidad necesaria!',
  printGuideSupportWarningMessage: `
  Esto tiene la intención de ser una guía general, ya que no puedo proporcionar una descripción de cada combinación de impresora / firmware que existe.<br/>
  Recomiendo hacer una pequeña prueba de impresión primero. Si tiene problemas para que esto funcione, busque en línea si su modelo de impresora específico admite el comando <strong> M600 </strong> G-Code para cambiar el filamento.<br/>`,
  printGuideGenerateQRCode: 'Generando el código QR',
  printGuideGenerateQRCodeSteps: `
  <li> Seleccione el tipo de código QR que desea generar en "Opciones de código QR". </li>
  <li> Complete los campos necesarios. </li>
  <li> Configure el modelo 3D en "Opciones de modelo 3D". </li>
  <li> Haga clic en "Generar modelo 3D" </li>
  <li> Guarde el archivo stl mediante el botón "Guardar como STL" en la parte superior derecha. </li> `,
  printGuideVersionDisclaimer: 'Versión {version}, su experiencia puede variar.',
  // Cura
  printGuideCuraStep1: `
  Corta el modelo y ubica la capa donde debería ocurrir el cambio de color.<br/>
  En mi caso, esto está en la capa 16.<br/>`,
  printGuideCuraStep2: `
  <li> Vaya a "Extensiones -> Posprocesamiento -> Modificar código G". </li>
  <li> Haga clic en "Agregar un script" y luego seleccione "Cambio de filamento". </li>
  <li> En la configuración de Cambio de filamento, establezca el valor de "Capa" en su número de capa del paso 1. </li>
  <li> Vuelva a cortar su modelo. El icono a la izquierda del botón "Rebanar" indica un script de posprocesamiento activo. </li> `,
  // PrusaSlicer
  printGuidePrusaSlicerStep1: `
  Corta el modelo y ubica la capa donde debería ocurrir el cambio de color. <br/>
  En mi caso, esto está en la capa 11. <br/> `,
  printGuidePrusaSlicerStep2: `
  <li> Haga clic en el pequeño signo más a la derecha de la barra de selección de capas. </li>
  <li> PrusaSlicer le ofrece una bonita vista previa donde puede ver los diferentes colores para verificar que ha seleccionado la capa correcta. Las partes del código qr deben tener un color diferente al de la base </li>
  <li> Vuelva a cortar su modelo. </li> `,
  printGuideStep3: `
  Ahora puede imprimir el modelo como de costumbre. <br/>
  La impresora 3D se detendrá en la capa especificada y se moverá al origen de la cama de impresión.
  Ahora puede cambiar el filamento y reiniciar el trabajo de impresión desde el menú de su impresora.
};

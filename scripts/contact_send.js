/**
 * Variable que recoge el elemento del DOM con el id "name".
 * @type {*}
 */
let contact_name = document.getElementById('name')
/**
 * Variable que recoge el elemento del DOM con el id "email".
 * @type {*}
 */
let contact_email = document.getElementById('email')
/**
 * Variable que recoge el elemento del DOM con el id "phone".
 * @type {*}
 */
let contact_txt = document.getElementById('txt')
/**
 * Variable que recoge el array de elementos del DOM con la clase "form__btn".
 * @type {*}
 */
let send = document.getElementsByClassName('form__btn')
/**
 * Variable que recoge el array de elementos del DOM con la clase "form__alert".
 * @type {*}
 */
let form_alert = document.getElementsByClassName('form__alert')
/**
 * Array que guarda valores booleanos procedentes de las respuestas de funciones "check".
 * @type {boolean}
 */
let isValid = []
/**
 * Recoge funciones anónimas en un array.
 * @type {*}
 */
let arrowFunctionsArray = []

//Recogemos las funciones anónimas de los eventos, para tratar con ellas por separado.
arrowFunctionsArray[0] = () => {
  checkName(contact_name, form_alert[0])
}
arrowFunctionsArray[1] = () => {
  checkEmail(contact_email, form_alert[1])
}
arrowFunctionsArray[2] = () => {
  checkTxt(contact_txt, form_alert[2])
}
try {
  /**
   * Se ejecutan las funciones de chequeo en el navegador y si dan "true", 
   * se procede al chequeo en base de datos, en el caso de algun "false", 
   * lo que hace es detener la función del botón y lanzar alertas.
   */
  sendForm = function (evt) {
    isValid[0] = checkName(contact_name, form_alert[0])
    isValid[1] = checkEmail(contact_email, form_alert[1])
    isValid[2] = checkTxt(contact_txt, form_alert[2])
    isValid[3] = true
    for (let i = 0; i <= isValid.length; i++) {
      if (isValid[i] == false) {
        contact_name.addEventListener('input', arrowFunctionsArray[0])
        contact_email.addEventListener('input', arrowFunctionsArray[1])
        contact_txt.addEventListener('input', arrowFunctionsArray[2])
        isValid[3] = false
      }
    }
    if (!isValid[3]) {
      //Se detiene el funcionamiento normal del botón.
      evt.preventDefault()
    }
  }
  //Se crea el evento.
  send[0].addEventListener('click', sendForm, true)
} catch (err) {
  alert(err)
}
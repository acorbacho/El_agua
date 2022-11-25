/**
 * Variable que recoge el elemento del DOM con el id "members".
 * @type {string}
 */
let calculator_members = document.getElementById('members')
/**
 * Variable que recoge el elemento del DOM con el id "liters".
 * @type {string}
 */
let calculator_liters = document.getElementById('liters')
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
 * @type {Array}
 */
let isValid = []
/**
 * Recoge funciones anónimas en un array.
 * @type {Array}
 */
let arrowFunctionsArray = []

//Recogemos las funciones anónimas de los eventos, para tratar con ellas por separado.
arrowFunctionsArray[0] = () => {
  checkMembers(calculator_members, form_alert[0])
}
arrowFunctionsArray[1] = () => {
  checkLiters(calculator_liters, form_alert[1])
}
try {
  /**
   * Se ejecutan las funciones de chequeo en el navegador y si dan "true", 
   * se procede al chequeo en base de datos, en el caso de algun "false", 
   * lo que hace es detener la función del botón y lanzar alertas.
   */
  sendForm = function (evt) {
    isValid[0] = checkMembers(calculator_members, form_alert[0])
    isValid[1] = checkLiters(calculator_liters, form_alert[1])
    isValid[2] = true
    for (let i = 0; i <= isValid.length; i++) {
      if (isValid[i] == false) {
        calculator_members.addEventListener('input', arrowFunctionsArray[0])
        calculator_liters.addEventListener('input', arrowFunctionsArray[1])
        isValid[2] = false
      }
    }
    if (!isValid[2]) {
      //Se detiene el funcionamiento normal del botón.
      evt.preventDefault()
    }
  }
  //Se crea el evento.
  send[0].addEventListener('click', sendForm, true)
} catch (err) {
  alert(err)
}
/**
 * Función para comprobar que el nombre de usuario introducido cumple con
 * los requisitos.
 * @param {*} name Parámetro usuario.
 * @param {*} alertclass Clase DOM.
 * @returns {boolean} 
 */
function checkName(name, alertclass) {
  try {
    //Expresión regular para el nombre.  
    const pattern = new RegExp('^[A-Z,á,é,í,ó,ú]+$', 'i')
    //Evaluamos la longitud y la expresión regular del username.
    if (name.value == '') {
      name.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un nombre válido.'
      return false
    } else if (!pattern.test(name.value)) {
      name.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un nombre válido.'
      return false
    } else {
      name.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

/**
 * Función para comprobar que el email introducido cumple con los requisitos.
 * @param {*} email Parámetro email.   
 * @param {*} alertclass Parámetro de clase.
 * @returns {boolean}
 */
function checkEmail(email, alertclass) {
  /**
   * Expresión regular email.
   */
  const pattern = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
  try {
    //Evaluamos la expresión regular.
    if (!pattern.test(email.value)) {
      email.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un email válido.'
      return false
    } else {
      email.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}
/**
 * Función para comprobar que el texto introducido cumple con los requisitos.
 * @param {*} txt Parámetro contraseña.
 * @param {*} alertclass Parámetro de clase.
 * @returns {boolean}
 */
function checkTxt(txt, alertclass) {
  try {
    //Evaluamos la longitud de la contraseña.
    if (txt.value.length < 10) {
      txt.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'Introduce un mensaje más largo.'
      return false
    } else {
      txt.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

/**
 *  Función para comprobar que el número de miembros del hogar introducido cumple con los requisitos.
 * @param {*} members Parámetro miembros.
 * @param {*} alertclass Parámetro de clase.
 * @returns 
 */

function checkMembers(members, alertclass) {
  try {
    if (members.value > 20 || members.value < 2 || members.value == '') {
      members.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'El número de miembros debe ser entre 2 y 20.'
      return false
    } else {
      members.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

/**
 * Función para comprobar que el número de litros introducido cumple con los requisitos.
 * @param {*} liters Parámetro litros.
 * @param {*} alertclass Parámetro de clase.
 * @returns 
 */
function checkLiters(liters, alertclass) {
  try {
    if (liters.value < 1) {
      liters.style.backgroundColor = 'lightcoral'
      alertclass.innerHTML = 'El número de litros debe ser al menos 1.'
      return false
    } else {
      liters.style.backgroundColor = 'white'
      alertclass.innerHTML = ''
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

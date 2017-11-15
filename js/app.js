(function(){

  var config = {
      apiKey: "AIzaSyCGyznYwiZtZ_1yRNmigvinW4MQsU5jzBY",
      authDomain: "dispo-a9b8d.firebaseapp.com",
      databaseURL: "https://dispo-a9b8d.firebaseio.com",
      projectId: "dispo-a9b8d",
      storageBucket: "dispo-a9b8d.appspot.com",
      messagingSenderId: "1015157204856"
    };
    firebase.initializeApp(config);
})
//Obtener los elementos
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnRegistrarse = document.getElementById('btnRegistrarse');
const btnLogout = document.getElementById('btnLogout');

//Evento Login
btnLogin.addEventListener('click', e =>{
  //alert("Hola");
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message);)
});

//Evento Signup
btnRegistrarse.addEventListener('click', e => {

  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});

btnLogout.addEventListener('click', e => {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  })
}());

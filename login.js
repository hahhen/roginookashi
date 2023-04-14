// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyClbeYWlsKsWVAC1QQf8K9W22kNrjTMzng",
    authDomain: "roginookashi.firebaseapp.com",
    projectId: "roginookashi",
    storageBucket: "roginookashi.appspot.com",
    messagingSenderId: "76735896471",
    appId: "1:76735896471:web:5df7cfee5a41411dae02d2",
    measurementId: "G-CRCX9RJ6DX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = firebase.auth()
  const database = firebase.database()

  var outErroText = document.getElementById("outErroText").textContent

  function register(){
    inEmail = document.getElementById("inEmail").value
    inSenha = document.getElementById("inSenha").value
    inNome = document.getElementById("inNome").value
 

    if (validate_email() == false || validate_password() == false){
        return
    }


    auth.createUserWithEmailAndPassword(inEmail, inSenha)
    .then(function(){
        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            email: inEmail,
            nome: inNome,
            last_login: Date.now
        }

        database_ref.child("users/" + user.uid).set()

        alert("Usuário criado")
    })
    .catch(function(error){
        var error_code = error.code
        outErroText = error.message
    })
}


  function validate_email(){
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(inEmail) == true){
        return true
    }else{
        return false
    }
}

function validate_password(){
    if(inSenha.length < 6){
        return false
    }else{
        return true
    }
}
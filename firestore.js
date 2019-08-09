var firebaseConfig = {
    apiKey: "AIzaSyALJ-L8OYuNChXIBurojo1MnnHN9pjoZ3A",
    authDomain: "innerve-a43dd.firebaseapp.com",
    databaseURL: "https://innerve-a43dd.firebaseio.com",
    projectId: "innerve-a43dd",
    storageBucket: "innerve-a43dd.appspot.com",
    messagingSenderId: "651253206894",
    appId: "1:651253206894:web:2204e70ab7fa178d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
document.getElementById('register-form').addEventListener('submit',store);

function store(e) {
    e.preventDefault();
    var team_name = document.getElementById("team_name").value;
    var first_name = document.getElementById("first_name").value;
    var college = document.getElementById("college").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_number").value;
    var output = document.getElementById("meal").value;
    var city = document.getElementById("city").value;
    var gdrive = document.getElementById("gdrive").value;
    
    db.collection("Outside_Pune_Registrations").add({
        team_name : team_name,
        leader_name : first_name,
        college : college,
        email: email,
        phone : phone,
        team_count : output,
        city: city,
        gdrive_link:gdrive

    }).then(function () {
        console.log("status saved");
        Swal.fire(
            'Good job!',
            'We have recieved your registration!! An email regarding the event has been sent to you.',
            'success'
        )
        sendemail();
    }).catch(function (error) {
        console.log("Got an error : ", error);
    });
    
    function sendemail() {
        e.preventDefault();
        var dest = document.getElementById("email").value;
        var name = document.getElementById("first_name").value;
        var str = "https://us-central1-innerve-a43dd.cloudfunctions.net/sendMail?dest=";
        var name = document.getElementById("first_name").value;
        str += dest;
        str += "&name=";
        str += name;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', str, true);
        xhr.send();
    }
}


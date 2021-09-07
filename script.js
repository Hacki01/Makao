import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
import { getDatabase , ref , set} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAe8CcfBz-XFkW6fIsJJYTe7zDXmoD4xWM",
    authDomain: "makao-e9a6c.firebaseapp.com",
    databaseURL: "https://makao-e9a6c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "makao-e9a6c",
    storageBucket: "makao-e9a6c.appspot.com",
    messagingSenderId: "150219683591",
    appId: "1:150219683591:web:adbc7a67e95b70caa777a2",
    measurementId: "G-7NMMER2CFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()
var nickname = 'Guest' + (9999 * Math.random() << 0)
function loadLayer(layer) {
    if (layer >= 0 && layer <= 4 ) {
        console.log(`Changed layer to ${layer}`)
        if (layer === 0) {
            document.getElementById('site').innerHTML = `
                <p>Makao</p>
                <form onsubmit="return false">
                    <input type='text' id='nickname' value= ${nickname} maxlength="10" autocomplete="off"></input><br><br>
                    <input type='button' onClick='loadLayer(2)' value='Dołącz do pokoju'></input><br><br>
                    <input type='button' onClick='loadLayer(1)' value='Stwórz pokój'></input> 
                </form>
            `
            document.getElementById('nickname').addEventListener('keyup',function(event){
                if (event.keyCode === 13){nickname=document.getElementById('nickname').value}
            })
        }else if (layer === 1) {//Create room
            let roomCode = 100000 + (899999 * Math.random() << 0)
            set(ref( db,"/"+roomCode+"/" + "Tzemie"), {
                cards:["jest","coraz","lepiej"]
            })
            document.getElementById('site').innerHTML = `
                <p>Lobby \n Kod Pokoju: ${roomCode}</p>
                <input type='button' id='button' onClick='loadLayer(0)' value='Wyjdź'></input>
            `
        }else if (layer === 2) {//Join Room
            document.getElementById('site').innerHTML = `
                <p>Dołącz do pokoju</p>
                <input type='number' id='roomCode' min="100000" max="999999" autocomplete="off"></input><br><br>
                <input type='button' onClick='roomJoin()' value='Dołącz'></input><br><br>
                <input type='button' onClick='loadLayer(0)' value='Wróć'></input>
            `
        }else {document.write("NIE GRZEB W TYM")}
    } else {document.write("NIE GRZEB W TYM");throw"NIE GRZEB W TYM";}
}
function roomJoin() {
    let roomCode = document.getElementById('roomCode').value
}
export { loadLayer}
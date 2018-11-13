/*
COMPTES INFOS
*/

let JSONcomptes = [
    {
        "login": "admin",
        "password": "admin",
        "droit": "administrateur"
    },{
        "login": "gouv",
        "password": "gouv",
        "droit": "gouvernement"
    },{
        "login": "assoc",
        "password": "assoc",
        "droit": "associations"
    },{
        "login": "scient",
        "password": "scient",
        "droit": "scientifiques"
    }
];

/*
METHODES
*/

// Recuperation GET
const $_GET = (param) => {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;	
    }
    return vars;
}

// Recuperation comptes
const getAllComptes = () => {
    const comptes = JSON.parse(JSON.stringify(JSONcomptes));
    return comptes;
}

/*
INIT
*/

// récuperation des comptes
let comptes = getAllComptes();

// récuperation des variables GET

let GET = $_GET();
let login = GET['login'];
let password = GET['password'];

// variables

let connexion;
let connecte_login;
let connecte_droit;

for(var compte in comptes)
{
    if(comptes[compte].login == login && comptes[compte].password == password){
        // récupération des infos de l'utilisateur connecté
        connecte_login = comptes[compte].login;
        connecte_droit = comptes[compte].droit;
        connexion = true;
        break;
    }else{
        connexion = false;
    }
}

// Redirection sur la page de connexion si les identifiants sont incorrects
if(!connexion)
    document.location.href="index.html";

console.log('Utilisateur connecté : ' + connecte_login);
console.log('Droit : ' + connecte_droit);
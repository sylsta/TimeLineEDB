//set the cookie when they first hit the site
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays===null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

//check for the cookie when user first arrives, if cookie doesn't exist call the intro.
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

function checkCookieIntro(){
   var cookie=getCookie("timelineEDB");

   if (cookie===null || cookie==="") {
      setCookie("timelineEDB", "1",90);
      startIntro();  //change this to whatever function you need to call to run the intro
      }
}

function startIntro(){
  var intro = introJs();
  intro.setOptions({
    steps: [
      { 
        intro: "Bienvenue dans l'application <b>TimeLine</b> <b>E</b>xploratory <b>D</b>ash<b>B</b>oard!"
      },
      { 
        intro: "Ici, on explique l'objectif"
      },
      {
        intro: "Ici, on explique l'usage de l'application"
      },
      {
        intro : "On va maintenant présenter les composants un par un"
      },
      {
        element: '#map',
        intro: "This is a map."
      },
      {
        element: '#daydensity',
        intro: 'Ce graphique interactif affiche la fréquence temporelle (heures de la journée) des enregistrement de l\'utilisateur.\n<br />Vous pouvez effectuer une sélection sur ces heures, ce qui aura pour effet de modifier les points affichés sur la carte, et ainsi, essayer de trouver les lieux fréquentés par l\'utilisateur aux différentes heures de la journée.\n<hr /> En cas de sélection spatale, la différence entre la fréquence générale (en bleu) et la fréquence de la sélection (en rouge) vous permettront de mieux comprendre l\'usage temporel d\'un lieu, et donc sa fonction.'
      },
      {
        element: '#dayfreq',
        intro: 'Ce graphique interactif affiche la fréquence temporelle (heures de la journée) des enregistrement de l\'utilisateur.\n<br />Vous pouvez effectuer une sélection sur ces heures, ce qui aura pour effet de modifier les points affichés sur la carte, et ainsi, essayer de trouver les lieux fréquentés par l\'utilisateur aux différentes heures de la journée'
      },
      {
        element: '#monthfreq',
        intro: 'monthfreq'
      },
      {
        element: '.well',
        intro: 'Analyse auto'
      },
      {
        element: '#userData',
        intro: "Charger données"
      },
      {
        element: '#mainHelp',
        intro: "Vous pouvez cliquer ici à tout moment pour ré-afficher cette présentation de TimeLine EDB.\n<hr /> Bonne exploration !"
      }
      ],
    tooltipPosition: 'auto',
    tooltipClass:'customDefault',
    positionPrecedence: ['left', 'right', 'bottom', 'top'],
    showProgress: true
  });
  
  intro.start();
}

function userDataIntro(){
  var introUserData = introJs();
  introUserData.setOptions({
    steps: [
      { 
        intro: "Vous pouvez maintenant explorer vos propres données, si toutefois Google en possède sur vous !"
      },
      {
        intro: "Pour cela, rendez-vous sur la page suivante et connectez-vous avec votre compte Google: <br /><a href='https://www.google.com/maps/timeline' target='_blank'>https://www.google.com/maps/timeline</a>. Vous pourrez alors revenir sur l'application TimeLine EDB."
      },{
        intro: "Si des données se sont bien affichées, il va falloir les télécharger depuis le serveur de Google afin de les insérer dans l'application."
      },{
        intro: "Pour se faire, allez sur la page <a href='https://takeout.google.com/settings/takeout/custom/location_history?hl=fr&gl=FR' target='_blank'>suivante</a>, laissez les options par défaut, et cliquez sur Suivant."
      },{
        intro: 'Vous pouvez alors cliquer sur "Créér une archive" et attendre que le fichier <i>zip</i> vous soit proposé en téléchargement.' 
      },{
        intro: "Une fois ce <i>zip</i> téléchargé, vous pourrez l'entrer dans l'application."
      },
      {
        element: '#userData',
        intro: "En cliquant sur ce menu."
      },
      {
        intro: "Tous les graphiques et la carte se mettront alors à jour avec vos propres données. Bonne exploration avec TimeLine EDB !"
      },{
        element: "#userDataHelp",
        intro: "Retrouvez ce tutoriel à tout moment en cliquant sur cette icône."
      }],
    tooltipPosition: 'auto',
    tooltipClass:'customDefault',
    positionPrecedence: ['left', 'right', 'bottom', 'top'],
    showProgress: true
  });
  
  introUserData.start();
}

window.onload = function() {
    checkCookieIntro();
}
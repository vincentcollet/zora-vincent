// Définition des traductions
const translations = {
    fr: {
        welcome: "Zora & Vincent",
        intro: "06/09/2025",
        rsvp: "RSVP",
        rsvp_text: "Merci de confirmer votre présence en remplissant ce formulaire :",
        program: "Programme",
        program_text: "Voici le déroulement de la journée...",
        links: "Liens utiles",
        links_text: "Infos sur les logements, transports..."
    },
    en: {
        welcome: "Zora & Vincent",
        intro: "06/09/2025",
        rsvp: "RSVP",
        rsvp_text: "Please confirm your attendance by filling out this form:",
        program: "Program",
        program_text: "Here is the schedule for the day...",
        links: "Useful Links",
        links_text: "Information on accommodations, transport..."
    },
    de: {
        welcome: "Zora & Vincent",
        intro: "06/09/2025",
        rsvp: "RSVP",
        rsvp_text: "Bitte bestätigen Sie Ihre Teilnahme, indem Sie dieses Formular ausfüllen:",
        program: "Programm",
        program_text: "Hier ist der Ablauf des Tages...",
        links: "Nützliche Links",
        links_text: "Infos zu Unterkünften, Transport..."
    },
    it: {
        welcome: "Zora & Vincent",
        intro: "06/09/2025",
        rsvp: "RSVP",
        rsvp_text: "Per favore confermate la vostra presenza compilando questo modulo:",
        program: "Programma",
        program_text: "Ecco il programma della giornata...",
        links: "Link utili",
        links_text: "Informazioni su alloggi, trasporti..."
    }
};

// Fonction pour changer la langue
function setLanguage(lang) {
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("content").style.display = "block";

    document.querySelectorAll("[data-lang]").forEach(el => {
        let key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Vérification du chargement du script
console.log("Script chargé !");

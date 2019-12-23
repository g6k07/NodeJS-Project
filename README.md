# NodeJS-Project
 Récupérer et traiter le contenu d'une page HTML sous NodeJS

## Description :
 Le but de ce projet est scraper le contenu d'une page HTML et de retourner les informations extraites sous format JSON.

## Environnement technique :  
 Node.js et npm

## Temps de réalisation : 
 4h dont 1h pour l’implémentation et les tests et 3h pour la formation et la mise en place de l’environnement technique.

## Etapes de réalisation :
 * Formation et installation de l’environnement Node.js 
 * Création du projet et ajout des paquets axios et cheerio via npm
 * Implémentation du fichier scraper.js

## Choix techniques / architecturaux :
 * Récupération du contenu de la page HTML : envoie d'une requête http en utilisant la librairie axios
 * Analyse du contenu de la page HTML : parsing  du code HTML en utilisant le module cheerio
 * Extraction des données utiles : définition et utilisation d’une expression régulière RegExp
 * Trier les données extraites : utilisation de structures de type Map
 * Conversion au format JSON des structures contenant les données : implémentation d’une fonction récursive


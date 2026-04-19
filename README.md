***

# Jeux Vidéops

Ce projet contient un HUB web qui permet d'accéder à plusieurs jeux vidéo. L'ensemble fonctionne avec des conteneurs Docker et le déploiement est automatisé grâce à un flux de travail CI/CD.

## Lancer tout le projet d'un coup (Le HUB et les jeux)

Pas besoin de lancer les jeux un par un pour y jouer. Docker s'occupe de tout relier. Ouvrir simplement le terminal à la racine du projet :

```bash
#début de la séquence de démarrage global
#éteint les machines qui tournent déjà
docker compose down
#construit et allume le hub et tous les jeux attachés
docker compose up --build
```

Ouvrir ensuite le navigateur sur `http://localhost:8080`. Tu vas atterrir sur le HUB et tu n'auras plus qu'à cliquer sur les images pour jouer.

## Lancer les tests jeu par jeu

Comme les jeux n'ont pas forcément été créés avec les mêmes technologies, les commandes de vérification sont différentes pour chacun. Il faut d'abord rentrer dans le dossier du jeu concerné.

### Pour le jeu 1 : Two Ships

Ce jeu utilise Node.js, Vite et Cypress. Voici comment lancer ses vérifications :

```bash
#début des commandes pour le jeu two ships
#entre dans le dossier cible
cd jeu-1-two-ships
#récupère les paquets du projet
npm install
#lance l'analyse de sécurité
npm audit
#vérifie la propreté du code source
npm run lint
#exécute les tests unitaires classiques
npm run test
#ouvre l'outil de test visuel cypress
npx cypress open
```

## Publication en ligne (Déploiement)

Le projet est hébergé publiquement. À chaque fois qu'une version officielle (Release) est créée sur la branche principale, le flux de travail s'active tout seul. Il compile le code, rassemble le HUB et les jeux, et publie le tout sur GitHub Pages.

***
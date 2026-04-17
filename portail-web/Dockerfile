#récupère un serveur web léger prêt à l'emploi
FROM nginx:alpine

# efface les pages de base pour faire place nette
RUN rm -rf /usr/share/nginx/html/*

#copie absolument tout le contenu du dossier actuel vers le serveur
COPY . /usr/share/nginx/html/

# autorise les connexions extérieures sur le port web
EXPOSE 80
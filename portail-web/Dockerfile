#récupère un serveur web léger prêt à l'emploi
FROM nginx:alpine

# efface les pages de base pour faire place nette
RUN rm -rf /usr/share/nginx/html/*

#copie absolument tout le contenu du dossier actuel vers le serveur
COPY . /usr/share/nginx/html/

#remplace la configuration réseau d'origine
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
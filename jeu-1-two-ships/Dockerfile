#définis l'environnement de fabrication
FROM node:24 AS constructeur

# place le curseur dans le dossier de travail
WORKDIR /app

#copie les listes de dépendances
COPY package*.json ./

#installe les outils nécessaires
RUN npm install

#transfère le code source
COPY . .

RUN npm run build

FROM nginx:alpine

# récupère les fichiers finaux pour les exposer
COPY --from=constructeur /app/dist /usr/share/nginx/html

EXPOSE 80
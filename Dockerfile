FROM node:21

Workdir /app

Copy . .

Run npm install

Expose 3000

Entrypoint ["npm","start"]

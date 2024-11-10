
FROM node:20-alpine

WORKDIR /app

#copy package.json and package.lock.json to install dependencies
COPY package.json package-lock.json ./

#install dependencies
RUN npm install

#copy the rest of the app's source code
COPY . .

#let's build
RUN npm run build

#expost the port the app runs on
EXPOSE 5173

#start command
CMD ["npm", "run","dev"]
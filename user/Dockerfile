FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]


# docker build -t products-app .

# docker run -p 3000:3000 -d products
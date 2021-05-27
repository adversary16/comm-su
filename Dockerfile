FROM node:14.7.0

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm i

COPY . /app
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
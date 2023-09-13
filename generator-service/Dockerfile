FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY ./generator-service/package.json ./generator-service/

RUN npm install --frozen-lockfile
COPY . .

RUN yarn workspace generator-service build


EXPOSE 8000
ENV PORT 8000

CMD ["node", "./generator-service/dist/index.js"]

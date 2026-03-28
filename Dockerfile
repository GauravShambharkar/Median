
FROM node

WORKDIR /src

COPY . .

RUN npm install

ENV PORT=4000

CMD ["node", "main.ts"]


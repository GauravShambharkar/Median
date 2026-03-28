
FROM node

WORKDIR /src

RUN npm install

COPY . .

ENV PORT=4000

CMD ["node", "main.ts"]


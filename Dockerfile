FROM node:latest
WORKDIR /app
RUN mkdir -p /app
COPY . /app
RUN npm install
RUN npm run test
RUN npm run build

FROM nginx:latest
WORKDIR .
COPY --from=0 /app/dist /usr/share/nginx/html
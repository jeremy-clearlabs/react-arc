FROM node:latest
WORKDIR /app
RUN mkdir -p /app
COPY . /app
RUN yarn
# RUN yarn run test
RUN yarn run build
# RUN npm install
# RUN npm run test
# RUN npm run build

FROM nginx:latest
WORKDIR .
COPY --from=0 /app/dist /usr/share/nginx/html

# Remove default conf and add our conf
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=0 /app/.nginx.conf /etc/nginx/conf.d/default.conf
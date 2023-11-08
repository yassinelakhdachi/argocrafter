FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force  
RUN npm install -f
COPY . .
RUN npm run build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

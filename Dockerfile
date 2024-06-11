FROM node:18-bullseye-slim AS build
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
# RUN yarn
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.21.1-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
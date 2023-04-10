FROM node:18.12.1-apline
WORKDIR app
COPY . .
RUN npm install
EXPOSE 8000
CMD ["node","server.js"]

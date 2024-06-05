FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 8085

ENV COURSE_GRPC_PORT=8085

ENV MONGO_URI="mongodb+srv://asifasifpsps:lH4djErRI5lIdprJ@cluster0.5fpkyaf.mongodb.net/CourseService?retryWrites=true&w=majority&appName=Cluster0"

ENV JWT_SECRET=GeniusGrid123


CMD [ "npm", "start" ]
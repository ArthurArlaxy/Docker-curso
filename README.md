# Docker-curso
App com PostgreSQL, Prisma, TypeScript e Node.js. integrado inteiramente pelo docker

docker build -t api .

docker run --name api -p 3000:3000 -v ${PWD}:/app api
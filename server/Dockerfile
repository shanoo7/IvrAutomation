FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8998
ENV DB_URL=mongodb+srv://piush:devpiush04@personal-projects.3gnp8dz.mongodb.net/automation?retryWrites=true&w=majority&appName=personal-projects
ENV REDIS_HOST=redis-18717.c264.ap-south-1-1.ec2.redns.redis-cloud.com
ENV REDIS_PORT=18717
ENV REDIS_PASSWORD=rnERMrpuTrkHl8L76qPUr0Ckj5DVx2qX

EXPOSE 8998

CMD ["npm", "run", "dev"]
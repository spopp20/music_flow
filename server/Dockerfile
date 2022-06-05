FROM node:16-buster

# Create app directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Copy both package json files
COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV NODE_ENV development

CMD ["npm", "start"]

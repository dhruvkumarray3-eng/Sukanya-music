FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts --no-audit --no-fund

COPY . .

RUN chmod +x start.sh

CMD ["./start.sh"]

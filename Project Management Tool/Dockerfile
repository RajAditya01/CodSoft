FROM node AS frontend-build
WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

FROM node AS backend-build
WORKDIR /backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend ./

FROM node AS final
WORKDIR /app
COPY --from=frontend-build /frontend/build ./frontend/build
COPY --from=backend-build /backend ./
EXPOSE 3000
CMD ["npm", "start"]

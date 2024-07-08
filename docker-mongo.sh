source .env
docker exec -it ${DEWAAN_MONGO_NAME} mongosh "mongodb://${DEWAAN_MONGO_USER}:${DEWAAN_MONGO_PASS}@${DEWAAN_MONGO_NAME}:27017/"

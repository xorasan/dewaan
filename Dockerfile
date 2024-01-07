FROM node:20.5.1-bookworm-slim

WORKDIR /dewaan

#COPY released .

EXPOSE 3060

CMD [ "node", "." ]
#CMD [ "ls", "-hopa" ]





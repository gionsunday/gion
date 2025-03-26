FROM node

ENV E_NEWSERVER = gmail \
   7


RUN mkdir -p /home/app

COPY . /home/app

CMD [ "npm", "start" ]


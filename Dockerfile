
#what image we want to build from
FROM node:12

#RUN date > /root/tmp_variable
#RUN VARIABLE=$(cat /root/tmp_variable);
#ENV PORT=8080
ARG DATETIME=00000
ENV DATETIME $DATETIME
#Dynamic varible in build
#--------Dynamic var #1---------
ARG USERNAME=test-test
ENV USERNAME $USERNAME
#--------Dynamic var #3---------
ARG TESTA=test0
ENV TESTA $TESTA
#--------Dynamic var #4---------
ARG TESTB=test0
ENV TESTB $TESTB

#create a directory to hold the application code inside the image, 
#this will be the working directory for the application
WORKDIR /usr/src/app

COPY package*.json ./ 
RUN npm install

# Bundle app source-To bundle your app's source code inside the Docker image
COPY . .



#for run time-- what to run first
CMD [ "npm", "start"]

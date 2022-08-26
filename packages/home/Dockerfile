FROM node:16-alpine3.12 as builder

# define metadata
LABEL MAINTAINER="bangz" \
    name="Romdon Uma" \
    version="0.0.1"

ARG HOME_HOST='http://localhost:3001'

WORKDIR /app
ENV NODE_ENV=development

# setup all the remote hosts
ENV HOME_HOST=${HOME_HOST}


# change the apt-get bahavior to nointeractive
ARG DEBIAN_FRONTEND=nointeractive

# COPY LERNA CONFIG/JSON
COPY ./package*.json /app/
COPY ./lerna.json /app/

# # COPY THE JSON FILE FOR home
COPY ./home/package*.json /app/home/

# # COPY THE JSON FILE FOR COMMON PACKAGES
COPY ./packages/common/package*.json /app/packages/common/

# RUN npm install
# SETUP AND INSTALL DEPENDENCIES
RUN npm ci --ignore-scripts --production --no-optional

# copy all the file to the image
# create a production build
COPY ./ /app/

RUN npx lerna bootstrap --hoist && npm run build

# RUN npm run build

# Second Stage build
FROM nginx:1.21.6-alpine

# update and install datezone lib
# remove existing config
RUN apk update && \
    apk add --no-cache tzdata && \ 
    rm -rf /usr/share/nginx/html/* && \
    rm -rf /etc/nginx/conf.d/*

# set Thai timezone
ENV TZ=Asia/Bangkok

# copy all the file from builder
# put it in the nginx dir
COPY --from=builder /app/home/dist /usr/share/nginx/html

COPY ./home/nginx/nginx.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

# # Create a group and user
# # Tell docker that all future commands should run as the appuser user
# # uncomment this if need to run without root
# RUN addgroup -S appgroup && \
#     adduser -S romdon -G appgroup

# USER romdon

VOLUME /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
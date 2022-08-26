FROM node:16-alpine3.12 as builder

# define metadata
LABEL MAINTAINER="bangz" \
    name="Romdon Uma" \
    version="0.0.1"

ARG PROFILE_HOST='http://localhost:3004'

WORKDIR /app
ENV NODE_ENV=development

# change the apt-get bahavior to nointeractive
ARG DEBIAN_FRONTEND=nointeractive

ENV PROFILE_HOST=${PROFILE_HOST}

# COPY LERNA CONFIG/JSON
COPY ./package*.json /app/
COPY ./lerna.json /app/

# # COPY THE JSON FILE FOR profile
COPY ./profile/package*.json /app/profile/

# # COPY THE JSON FILE FOR COMMON PACKAGES
COPY ./packages/common/package*.json /app/packages/common/

# RUN npm install
# SETUP AND INSTALL DEPENDENCIES
RUN npm ci --ignore-scripts --profileion --no-optional

# copy all the file to the image
# create a profileion build
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
COPY --from=builder /app/profile/dist /usr/share/nginx/html

COPY ./profile/nginx/nginx.conf /etc/nginx/conf.d

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
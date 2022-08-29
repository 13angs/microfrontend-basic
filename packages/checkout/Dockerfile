FROM node:16-alpine3.12 as builder

# define metadata
LABEL MAINTAINER="bangz" \
    name="Romdon Uma" \
    version="0.0.1"

ARG CHECKOUT_HOST='http://localhost:3003'

WORKDIR /app
ENV NODE_ENV=development

# setup all the remote hosts
# ENV CHECKOUT_HOST=${CHECKOUT_HOST}

# change the apt-get bahavior to nointeractive
ARG DEBIAN_FRONTEND=nointeractive

# COPY LERNA CONFIG/JSON
COPY ./package*.json /app/
COPY ./lerna.json /app/

# # # COPY THE JSON FILE FOR CONTAINER
COPY ./packages/checkout/package*.json /app/packages/checkout/

# # # COPY THE JSON FILE FOR COMMON PACKAGES
COPY ./packages/common/package*.json /app/packages/common/

# RUN npm install
# SETUP AND INSTALL DEPENDENCIES
RUN npx lerna clean -y && \
    npx lerna bootstrap --hoist

# copy all the file to the image
# create a production build
COPY ./ /app/

# build the checkout
RUN cd /app/packages/checkout && \
    npm run build

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
COPY --from=builder /app/packages/checkout/dist /usr/share/nginx/html

COPY ./packages/checkout/nginx/nginx.conf /etc/nginx/conf.d

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
FROM mhart/alpine-node:latest

LABEL MAINTAINER "Gonzalo Plaza <gonzalo@verize.com"

# Environment vars
ENV NODE_ENV development
ENV PORT 3000

RUN apk add --no-cache \
    gcc \
    bash \
	build-base \
	linux-headers \
    lcms2-dev \
    libffi-dev \
    libpng-dev

# Clearing cache
RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*

# Adds www-data user and group
RUN addgroup -S www-data && adduser -S -G www-data www-data

# Install pm2 globally
RUN yarn global add pm2

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json /tmp/
COPY yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /app
COPY . /app

# Start pm2.json process file
CMD ["pm2-runtime", "start", "/app/bin/pm2.json"]

# Expose ports needed to use Keymetrics.io
EXPOSE 3000 43554
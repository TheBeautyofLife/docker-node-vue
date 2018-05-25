FROM mhart/alpine-node:latest

LABEL MAINTAINER "Gonzalo Plaza <gonzalo@verize.com"

RUN apk add --no-cache \
    gcc \
	build-base \
	linux-headers \
    libffi-dev \
    libpng-dev

RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*

RUN addgroup -S www-data && adduser -S -G www-data www-data

COPY . /app

WORKDIR /app

RUN yarn install

CMD ["node", "bin/www"]

EXPOSE 8080
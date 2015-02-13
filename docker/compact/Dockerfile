FROM ubuntu:14.04.1
MAINTAINER Peter Volgyesi <peter.volgyesi@vanderbilt.edu>
ENV REFRESHED_AT 2014-12-4

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -y update && apt-get -y install git curl mongodb supervisor

RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install -y nodejs

RUN git clone https://github.com/webgme/webgme.git /webgme 
RUN cd /webgme && /usr/bin/npm install

RUN mkdir -p /webgme /var/log/supervisor /var/lib/mongodb/ /var/log/mongodb/

COPY supervisord.conf /etc/supervisord.conf
COPY mongodb.conf /etc/mongodb.conf
COPY config.js /webgme/src/bin/config.js
COPY examples/ /tmp/examples/

RUN for i in /tmp/examples/*; do /usr/bin/mongoimport --dbpath /var/lib/mongodb/ --db webgme --collection `basename $i .json` --file $i; done

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
EXPOSE 80

# Docker-based deployment configuration(s) for WebGME

This repository contains various configuration, script and data files
to build Docker-based WebGME containers/images.

# Build images

Enter one of the top-level folders and use `docker build -t <tagname> .`

# Use images

You can use your own images or those published on Docker Hub by the WebGME team (webgme/*)

# Configuration

* compact: single docker image with MongoDB, node.js, webgme. Seeded 
with a small set of example projects. Use with: `docker run -p <public-port>:80 -d webgme/compact`
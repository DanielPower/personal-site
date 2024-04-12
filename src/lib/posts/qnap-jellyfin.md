---
title: "Setting up Jellyfin on the QNAP TS-464"
date: "2023-09-25"
---

# Prerequisites

This guide assumes you have Container Station installed.

# Create the application

```yml
version: "3.0"
services:
  jellyfin:
    image: lscr.io/linuxserver/jellyfin:latest
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /share/Multimedia/Movies:/data/movies
      - /share/Multimedia/Shows:/data/shows
      - /share/Multimedia/Youtube:/data/youtube
      - /share/Jellyfin/config:/config
    ports:
      - 49158:8096
    devices:
      - "/dev/dri/renderD128:/dev/dri/renderD128"
    restart: unless-stopped
```

# Address GPU permissions

ssh in and do

```sh
sudo chmod 777 /dev/dri/renderD128
```

# Automate with Systemd

Write a unit file my guy

---
title: Plex
share: true
created_at: 2024-05-10
updated_at: 2024-05-10
---

# Plex Setup
- Docker
- mount Synology drive via NFS in docker-compose https://www.reddit.com/r/selfhosted/comments/lkti7c/how_do_you_properly_attach_nfs_shares_to_docker/
- https://github.com/plexinc/pms-docker
- Run via Portainer
- Data all exist on Synology drive
- Config data will be stored on the NUC and backed up to the Synology
	- Config data is in /data/plex
	- Setting the UID/GID to the same as the `docker` user on the Synology solved the writing issue with Plex Live TV DVR. This needs to be used on all docker-compose setups going forward.

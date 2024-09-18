---
title: Docker NFS Setup
share: true
created_at: 2024-06-10
updated_at: 2024-06-10
---
In order to access the NAS file system from Docker compose files, use the following code black. Make sure that the path in `device` points to the share you want to access
```
volumes:
  media:
    driver_opts:
      type: "nfs"
      o: "addr=XXX.XXX.XXX.XXX,nolock,rw,soft,nfsvers=4"
      device: ":/volume1/Media"
```

In the `services` section of the compose file include

```
 volumes:
      - media:/data
```

This maps the named volume to the internal path for the container.
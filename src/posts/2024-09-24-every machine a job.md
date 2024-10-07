---
title: Every Machine a Job
share: true
created_at: 2024-10-06T21:49:38.000Z
updated_at: 2024-10-06T21:49:38.000Z
---

I've been thinking a lot about the network and server configuration, as well as "what are our goals."

I'm thinking about the machines that make up the home lab as corresponding to different functions. I sketched it out below.

![Sketch of network layout](./img/tunnel-to-funnel-services-sketch.png "Network layout")

Each device serves a purpose:

1. Synology is our NAS and is going to also contain NextCloud so that it can have all file management functionality in one place. I have notes on connecting to the Synology in a docker-compose so that it's baked into that image. I'll go over that in another post.
2. The Pi Cluster will host the majority of our services. I'm thinking Mastodon, GoToSocial, Calibre-Web, Pixelfed, RSSHub, Supabase, Directus, etc.
3. The B-link will house the Coder instance, GitHub Runners, and maybe Drone.io
4. We'll have a single Raspberry Pi that manages Umbrel (Bitcoin and Lightning nodes)
5. The NUC will host our media server, Plex.

I didn't want to get rid of any of the machines that we've collected over the years. Giving each section to a specific machine or cluster is going to make it easy to know where things should go as we add more capabilities.

As far as outside the home network, I think we'll continue to have a DigitalOcean droplet to host the public Reverse Proxy connected to our Tailscale Tailnet. I'm toying with either using a Virtual IP (self-assigned IP that the Keepalived service uses as a single entry point to the Pi Cluster) or each docker container has a permanent Tailscale IP that travels wherever the compose file is run on our system. If we can side car that in, then we almost loose the need to have a single Virtual IP that is managed on the cluster. It also means we could move that docker container to a completely different piece of hardware outside the cluster and it's Virtual IP and the reverse proxy would just pick it up.



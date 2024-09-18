---
title: Hello Zane!
share: true
created_at: 2024-09-17T22:29
updated_at: 2024-09-17T22:29
---

Hello Zane!

It's time to get our home lab back up and running. Thank you for all the research you did and the initial setup work this summer. I wanted to get written out what I'm envisioning for our next steps and what we want to build out. Once our schedules calm down I want to get back to recording our podcast with you.


Current Status:

- Raspberry Pi cluster needs to have the one node that stopped responding swapped out.  I have the parts and now it's a matter of just removing the old board.
- The Synology is currently running our Docker containers: Plex, Portainer, and Directus (CMS that is connecting to Supabase for my personal data tracking. Once the PiCluster is back up we'll migrate those over.
- Tailscale exit node is up and running.
- We currently have Mastodon, GoToSocial, and a few other services running on DigitalOcean.

Next Steps:

- Pi Cluster up and running is the first priority. I want to use the shared storage and implement the High Availability using KeepAliveD. I'm having trouble figuring out how to define a Virtual IP for the cluster to load balance through because we have Eero as our gateway. I am thinking about deploying a Ubiquity EdgeRouterX as an internal network that all the Home Lab services go through so that it's isolated on its own subnet. This, plus Tailscale should allow us to be able to access each machine but also address the cluster as a singular IP that allows for roll over in case of a node failure.
- Once this is up and running I want to decommission the "outside" server. I want to host Mastodon and GoToSocial in our network on our own hardware since if there is an interruption in service they will come back up and fetch outstanding data.  The only service that has an issue with this currently would be our Matrix chat server, and, honestly, I don't think we would have an issue if there is a service outage as long as we can stand it back up via a docker-compose file. Would love to know your thoughts on that.

Two big items to do that can set us up so we both can spin up services and get our media server into a high availability mode.

Can't wait to hear from you!

Dad

PS. This is going to be our first post on the revamped Ok, What Went Wrong?

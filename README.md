# Ok, What Went Wrong? - A Podcast Site

This is the consolidated Commonplace Book for the podcast, **Ok, What Went Wrong?**

## Features

- Builds podcast posts from the RSS feed for the podcast
- Pages build from the shared Obsidian Vault

## Podcast Pages

The RSS feed is generated using soverign-feeds and then, on build triggered by call to Github Actions, we utilize 11ty to create new pages based on new RSS entries.
MP3s are stored in Cloudflare R2 and linked from the frontmatter in the Markdown files created during the ingestion.

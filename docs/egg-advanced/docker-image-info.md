---
sidebar_position: 2
---

# Overview of Yolks

The [Ptero-Eggs yolks repository](https://github.com/Ptero-Eggs/yolks) provides a variety of Docker images (called yolks) specifically designed for use with Pterodactyl eggs.

These images provide the necessary runtime environments for game servers, bots, utilities, databases, and other services.
Pterodactyl eggs run within Docker containers. 
The **Docker image** for an egg defines the base operating system and software environment available to the server. Choosing the right image is important:

- Pterodactyl also maintains an official repository of images (called **Yolks**) covering many common games, languages, and services.
- You may also use a [Custom Docker Image](docker-images.md) for unique requirements

These images provide the necessary runtime environments for game servers, bots, utilities, databases, and other services.

## Categories of Yolks
### General Purpose

| Image | Description |
|-------|-------------|
| `oses` | Base operating system images used to build other yolks. Includes core utilities for most container environments. |
| `installers` | Includes tools like `curl` and `wget`, commonly used to simplify and speed up installation scripts. |

### Programming Languages

| Image | Description |
|-------|-------------|
| `go` | An environment for Go (Golang) applications. Used for servers or tools written in Go. |
| `java` | Supports running Java applications, including Minecraft servers and Java-based tools. |
| `nodejs` | Provides Node.js and npm for JavaScript-based apps like bots, utilities, etc. |
| `python` | Used to run or build Python applications, scripts, or automation tools. |
| `rust` | Provides an environment for building or running applications developed in Rust. |

### Databases

| Image | Description |
|-------|-------------|
| `mariadb` | A drop-in replacement for MySQL, used for web apps and game server databases. |
| `mongodb` | A NoSQL database suited for dynamic data structures and fast performance. |
| `postgres` | Relational SQL database known for advanced features and data integrity. |
| `redis` | In-memory data structure store, used for caching and high-performance applications. |

### Game Tools

| Image | Description |
|-------|-------------|
| `steamcmd` | Allows downloading and managing game servers from Steam (e.g. ARK, CS:GO, Valheim). |
| `wine` | Runs Windows-based applications in Linux containers—useful for games that don’t have Linux builds. |

### Other

| Image | Description |
|-------|-------------|
| `mono` | Environment for .NET applications using the Mono runtime. Supports C# programs and older .NET games. |
| `voice` | Optimized for voice servers or tools like TeamSpeak or Mumble. |

---

## Architecture Support

- Most yolks support both `amd64` and `arm64` architectures. Always check the image documentation to confirm compatibility with your server hardware.

## Additional Resources

- If you’re not sure which image to use for your egg, start with one of the [Official Yolks by Pterodactyl](https://github.com/Ptero-Eggs/yolks)

For information on building your own Docker image for use with Pterodactyl, see [Creating Your Own Docker Image](/docs/egg-advanced/docker-images.md).

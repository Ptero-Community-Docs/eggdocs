---
sidebar_position: 2
---

# Overview of Yolks

The [Ptero-Eggs yolks repository](https://github.com/Ptero-Eggs/yolks) provides a variety of Docker images (called yolks) made for Pterodactyl eggs.

Below is a categorized summary of commonly used yolks and their purposes:

## General Purpose

### oses
Base operating system images used to build other yolks. Includes core utilities for most container environments.

### installers
Includes tools like `curl` and `wget`, commonly used to simplify and speed up installation scripts.

## Programming Languages

### go
An environment for Go (Golang) applications. Used for servers or tools written in Go.

### java
Supports running Java applications, including Minecraft servers and Java-based tools.

### nodejs
Provides Node.js and npm for JavaScript-based apps like bots, utilities, etc.

### python
Used to run or build Python applications, scripts, or automation tools.

### rust
Provides an environment for building or running applications developed in Rust.

## Databases

### mariadb
A drop-in replacement for MySQL, used for web apps and game server databases.

### mongodb
A NoSQL database suited for dynamic data structures and fast performance.

### postgres
Relational SQL database known for advanced features and data integrity.

### redis
In-memory data structure store, used for caching and high-performance applications.

## Game Tools

### steamcmd
Allows downloading and managing game servers from Steam (e.g. ARK, CS:GO, Valheim).

### wine
Runs Windows-based applications in Linux containers—useful for games that don’t have Linux builds.

## Other

### mono
Environment for .NET applications using the Mono runtime. Supports C# programs and older .NET games.

### voice
Optimized for voice servers or tools like TeamSpeak or Mumble.

---

Each yolk supports `amd64` and `arm64` platforms. For full details, visit the [Ptero-Eggs/yolks GitHub repo](https://github.com/Ptero-Eggs/yolks).

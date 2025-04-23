---
title: "Getting Started"
sidebar_label: "Getting Started"
sidebar_position: 1
---

## About Eggs

Eggs are a powerful feature of Pterodactyl that allow you to create custom server containers for games, services, bots, and much more. They provide a structured way to define how a server should be installed and run by the panel.

An **Egg** is a configuration file written in JSON that tells Pterodactyl:
- Which Docker image to use as the runtime environment
- How to install the server software
- How to start the server using a command template
- What variables and files the server needs

Eggs are grouped into **Nests**, which act as categories. For example, a “Minecraft” Nest might contain multiple Eggs for different Minecraft server types like Paper, Forge, or Bedrock Edition.

Pterodactyl's system of Eggs and Nests provides modular flexibility, making it easier for administrators to manage different types of servers within a unified interface.

Now that you know what an Egg is and how it's structured, let’s explore how to manage them through the Pterodactyl panel in the next sections.

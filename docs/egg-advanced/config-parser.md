---
sidebar_position: 1
---


# Config Parser
## Format
The **config parser** modifies (config) files when a server starts.

This ensures that essential server settings are **defined**, **modified**, and **injected dynamically** before the server starts.

## How It Works

Pterodactyl will:
- Load the file (e.g. `server.properties`)
- Replace or insert key-value pairs
- Save it before startup completes

## Properties Example

```json
{
  "parser": "properties",
  "find": {
    "server-ip": "{{server.build.default.ip}}",
    "server-port": "{{server.build.default.port}}",
    "max-players": "{{env.MAX_PLAYERS}}"
  }
}
```
In this example, we are parsing the `server.properties` file using the `properties` parser.

Each line inside the `find` block represents a key-value pair that will be checked and updated (or inserted if missing) in the file:

- `server-ip`: This sets the IP the server will bind to. In this case, it's explicitly set to `0.0.0.0` so the server listens on all interfaces.

- `server-port`: This replaces or defines the port the server uses. It uses the dynamic value `{{server.build.default.port}}`, which is provided by the panel's build configuration.

- `query.port`: Similar to `server-port`, this sets the port used for server query functionality, also using the same dynamic port value.

Each time the server starts, the Daemon checks the file:
- If the file exists, it updates the specified keys with the given values.
- If it doesn't exist, the file will be created and include only the defined keys and values in the correct format.

This ensures important settings are always in place and match the server's configuration, without requiring manual edits to the file.


## YAML Example with Wildcard

```json
{
  "config.yml": {
    "parser": "yaml",
    "find": {
      "listeners[0].query_enabled": true,
      "listeners[0].query_port": "{{server.build.default.port}}",
      "listeners[0].host": "0.0.0.0:{{server.build.default.port}}",
      "servers.*.address": {
        "127.0.0.1": "{{config.docker.interface}}",
        "localhost": "{{config.docker.interface}}"
      }
    }
  }
}
```
In this example, we are parsing `config.yml` using the `yaml` parser. The first three find items are simply assigning ports and IPs for the first listener block. The last one, `servers.*.address` uses wildcard matching to match any items within the `servers block`, and then finding each `address` block for those items.
An advanced feature of this file configuration is the ability to define multiple find and replace statements for a single matching line.


In this case, we are looking for either 127.0.0.1 or localhost and replacing them with the docker interface defined in the configuration file using `{{config.docker.interface}}.`

## Parser Types
The available Parser Types are:
| Type | Description |
|------|-------------|
| `properties` | `.properties` files with key=value pairs |
| `ini` | Supports `[sections]` and `key=value` pairs |
| `yaml` | Handles nested keys, supports wildcards |
| `json` | Parses full structure, adds missing keys |
| `xml` | Can update attributes/values via xpath |
| `file` | Simple find/replace by line content (avoid if possible) |

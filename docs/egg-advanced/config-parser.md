---
sidebar_position: 1
---

# Config Parser

## Format
The **config parser** processes JSON-based definitions that dictate how the Pterodactyl Daemon manages configuration files.  

It ensures that essential server settings are **defined, modified, and injected dynamically** before the server starts.

### Here’s an example using the **properties** parser:
```json
{
    "server.properties": {
        "parser": "properties",
        "find": {
            "server-ip": "0.0.0.0",
            "server-port": "{{server.build.default.port}}",
            "query.port": "{{server.build.default.port}}"
        }
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


### Here’s an example using the **yaml** parser:

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
## Parser types

### **properties**
Used for `.properties` files like `server.properties`.
- Follows the `VARIABLE=VALUE` format.
- Comments must start with `#`.


### **ini**
Used for `.ini` files which may contain section headers and key-value pairs.
- Keys are set within sections, created if missing.
- Matches are defined using dot notation (e.g., `section.key`).

### **yaml**
Used for `.yaml` or `.yml` files.
- Modifications are made using exact key paths.
- Supports * notation

### **json**
Used for `.json` files.
- Structured like YAML and treated similarly.
- If a key does not exist, it will be added automatically.
- Supports * notation


### **xml**
Used for `.xml` files with tag-based structures.
- Supports dot notation (e.g., `root.child.key`) for tag targeting.
- Automatically creates missing tags.
- Wildcards are supported in tag paths.

### **file**
Used for plain text files.
- Replaces lines that start with the specified `match` value, not a specific property like the other five. Avoid using this parser if possible
- Does not operate on keys, only raw lines.

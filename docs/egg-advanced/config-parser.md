---
sidebar_position: 1
---

# Config Parser

## Format
The config parser works through a json string that has the parser type, file name and variables with their values, an example is provided below:

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

**server.properties** - config file name

**properties** - parser type, this one expects a file with lines in the format of ``VARIABLE=VALUE`` and comment lines prefixed with ``# ``

**server-ip** - Variable to search for in the config file

**0.0.0.0** - The value to set the variable to, can also be a default or custom egg variable

The config parser will run each server start, check if the file exists and rewrite the config to the defined values.

If the config file does not exist it will generate one according to the larser format with the defined variables and values in it.

## Parser types

### Properties

This type of parser expects a file in the format of ``VARIABLE=VALUE" where value can also be in `"` brackets for each line.

Make sure you only have lines in that format in the file and comments are prefixed with `# `

:::info
This section still needs to be expanded, feel free to contribute!
:::

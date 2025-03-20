---
sidebar_position: 3
---

# Egg Variables

Each egg has Variables that you can use in either the **Egg Install script** or the **Config Parser**

These Variables can be very helpful for having dynamic values in your install script that can be easily modified by end users.

## Default Variables

This is a collection of all the default variables each Egg has, you can reference these in your script in this format: ``{{server.build.default.VARIABLE_NAME}}`` or just as ``${VARIABLE_NAME}``

These can also be used in the config parse as so: ``{{server.build.default.VARIABLE_NAME}}``

| Variable Name             | Description                                               | Example           |
|---------------------------|-----------------------------------------------------------|-------------------|
| TZ                        | Time Zone set from panels ``.env``                        | ``Etc/UTC``       |
| STARTUP                   | Startup command of the egg 	                              | ./Process         |
| SERVER_MEMORY             | 	Memory available for the server in MB                    | 	512              |
| SERVER_IP                 | 	Default ip of the server                                 | 	127.0.0.1        |
| SERVER_PORT               | 	Primary Server Port                                      | 	27015            |
| P_SERVER_LOCATION 	       | Location of the server                                    | 	Example Location |
| P_SERVER_UUID             | 	UUID of the server 	539fdca8-4a08-4551-a8d2-8ee5475b50d9 |
| P_SERVER_ALLOCATION_LIMIT | 	Limit of allocations allowed for the server              | 	0.000000         |
| USER 	                    | User that executes the startup command in the server      | 	container        |
| HOME                      | 	Home path of the container user                          | 	/home/container  |

## Custom Variables

You can also create additional Variables to use in your script in the Variables Tab, like default variables you can reference them in your script or config parser the same way but using ``env`` instead of ``default`` as they are not default variables.
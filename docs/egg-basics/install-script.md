---
sidebar_position: 4
---

# Install Script
:::info
This section still needs some clarification, feel free to contribute!
:::

The install script is where the egg magic comes to shine.

Here you will define all the commands that will run during the server installation phase and install all dependencies and files your application or game needs to run in the [runtime docker image](egg-components.md#docker-images)

:::caution
Packages installed during the installation will not be available after the install is complete, make sure all packages needed are included in the runtime image
:::
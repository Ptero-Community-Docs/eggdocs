---
sidebar_position: 1
---

# Making your first Egg

In this tutorial we will teach you how to make a simple egg!

## Creating the Egg
First, navigate to the Nests Page in the Admin Dashboard of Pterodactyl, which can be found towards the very bottom of the left sidebar.

On the top right, you will see two buttons labeled "Import Egg" and "Create New". Click the "Create New" button to make a new Nest (Collection of Eggs) or click into an existing Nest to add your egg there.

At the bottom of the Nest you can now make a new Egg using the "New Egg" button!

## Basic Configuration

On the new tab that just opened up we can now define the basic info for your new egg, such as its name, description and the Docker Images the user can choose from (This is useful for games like Minecraft that have multiple Java Versions that work based on the version of the game, you can also just only define one).

The [yolks repository](https://github.com/pterodactyl/yolks) from the pterodactyl team has a vast collection of various Docker Images made specifically for eggs.

For more info on the Configuration Tab, take a look at the documentation on the [Configuration Tab](../egg-basics/egg-components.md#configuration-tab).

Once you are done with the basic details, click "Create" at the bottom and your new Egg is alive! From here the next steps are making [Custom Variables](../egg-basics/egg-variables.md#custom-variables) for your egg if it needs any and creating the [Install Script](../egg-basics/install-script.md).
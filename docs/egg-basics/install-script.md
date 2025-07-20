---
sidebar_position: 4
---

# Install Script  

The install script is where the **egg magic** happens.  

Here, you define the commands that run during the **installation phase** to set up the environment, download necessary files, and prepare everything your application or game needs to run in the [runtime Docker image](egg-components.md#docker-images). 

 You can choose a special Docker image for the installation process (separate from the server’s runtime image). Pterodactyl provides some “installer” images (Alpine or Debian based) that include common utilities like `curl`, `wget`, `unzip`, `git`, etc., to help with installation tasks. If you’re not sure, use one of the official installer images:

- `ghcr.io/ptero-eggs/installers:alpine`

- `ghcr.io/ptero-eggs/installers:debian`

- `ghcr.io/ptero-eggs/installers:ubuntu`

![Install Script](img/install-script-tab.png)

## How It Works  
:::caution  
Anything installed **outside** `/mnt/server` (e.g., system packages installed with `apt`, `apk`, or `yum`) **will not persist** into the runtime container. If your application needs specific system dependencies, they must be included in the **runtime Docker image**.  
:::

When an egg is deployed, the install script runs **inside a temporary install container**, which is separate from the actual runtime environment. This script is responsible for:  

1. **Create the server directory:** The script typically starts by making sure the `/mnt/server` directory exists and is the current working directory.  
   - For example, you might use:  
     ```bash
     mkdir -p /mnt/server
     cd /mnt/server
     ```  
   - (In many official scripts, the container’s working directory is already set to `/mnt/server`, but it’s good practice to ensure it.)

2. **Download and prepare files:** Fetch any necessary files (server binaries, mods, configs, etc.) from the internet or local sources.  
   - Common tools for this are `curl`, `wget`, `git clone`, or using a command pipeline like `curl ... | tar ...`.  
   - For example, you might download a ZIP of the server software and then unzip it.

3. **Set up configurations:** If your server requires an initial configuration file or certain directory structure, you can create those here.  
   - For instance, you might generate a default config file, or rename files, etc.  
   - You can also use the values of variables by referencing environment variables (e.g. `${MAX_PLAYERS}` in the script will use the value from a custom egg variable if one exists).

4. **Install any additional dependencies (if needed for installation):** In some cases, the install process itself might require extra tools or packages. Since the official installer images come with common tools, this is rarely needed, but you could install others (e.g., `apk add ...` or `apt install ...`) in the install container. Remember, these tools won’t be present in the runtime container, so this step is only for things needed *during installation* (not for actually running the server).


### What Happens After Installation?  

Once the install script finishes:  

   - Everything inside `/mnt/server` is moved to the **persistent storage volume** of the server container.  
   - The runtime container (running a different Docker image) will then start and use these files.  

## Example Install Script  

```sh
#!/bin/bash
# Create and navigate to the server directory
mkdir -p /mnt/server
cd /mnt/server || exit 1

# Install dependencies required for installation
apt update && apt install -y unzip wget

# Download necessary files
wget -O game-server.zip "https://example.com/game-server.zip"
unzip game-server.zip
rm game-server.zip

# Set up configuration
echo "max_players=32" > config.cfg

# Ensure correct permissions
chown -R containeruser:containergroup /mnt/server
chmod -R 755 /mnt/server
```

### Notes  

   - **Only files inside `/mnt/server` persist** into the runtime container.  
   - Any **system packages installed during this phase (e.g., `apt install git`) will not be available in the runtime container** unless the runtime image includes them.  
   - If your application requires extracted files, then it's best to clean up any unnecessary archives afterward.  
   - Permissions should be adjusted properly so that the runtime container can access the files.
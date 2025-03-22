---
sidebar_position: 4
---

# Install Script  

The install script is where the **egg magic** happens.  

Here, you define the commands that run during the **installation phase** to set up the environment, download necessary files, and prepare everything your application or game needs to run in the [runtime Docker image](egg-components.md#docker-images).  

## How It Works  

When an egg is deployed, the install script runs **inside a temporary install container**, which is separate from the actual runtime environment. This script is responsible for:  

1. **Creating the necessary directory structure**  
   - You must **manually create** the `/mnt/server` directory inside the install container.  
   - Navigate into this directory before downloading or installing anything.  

2. **Downloading and preparing files**  
   - Any game or application files should be downloaded into `/mnt/server`.  
   - You can use tools like `wget`, `curl`, or `git clone` to fetch required files.  

3. **Setting up configurations**  
   - If your application requires specific configurations, you can modify or generate them here.  

4. **Installing additional dependencies** (if needed)  
   - If your install process requires extra tools (e.g., `git`, `unzip`), you can install them in the install container.  

:::caution  
Anything installed **outside** `/mnt/server` (e.g., system packages installed with `apt`, `apk`, or `yum`) **will not persist** into the runtime container. If your application needs specific system dependencies, they must be included in the **runtime Docker image**.  
:::

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
- If your application requires extracted files, be sure to clean up any unnecessary archives afterward.  
- Permissions should be adjusted properly so that the runtime container can access the files.
const https = require('https');
const fs = require('fs');

const owner = "Ptero-Community-Docs";
const repo = "eggdocs";
const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;

function fetchContributors() {
    return new Promise((resolve, reject) => {
        https.get(
            url,
            { headers: { "User-Agent": "Node.js" } },
            (res) => {
                let data = '';

                res.on("data", (chunk) => {
                    data += chunk;
                });

                res.on("end", () => {
                    try {
                        const contributors = JSON.parse(data);
                        if (Array.isArray(contributors)) {
                            resolve(contributors.map((c) => ({
                                name: c.login,
                                profileUrl: `https://github.com/${c.login}`,
                            })));
                        } else {
                            reject("Invalid data");
                        }
                    } catch (error) {
                        reject("Error parsing contributors");
                    }
                });
            }
        ).on("error", (error) => {
            reject("Error fetching contributors: " + error.message);
        });
    });
}

async function saveContributors() {
    try {
        const contributors = await fetchContributors();
        fs.writeFileSync('./contributors.json', JSON.stringify(contributors, null, 2));
        console.log("Contributors saved!");
    } catch (error) {
        console.error("Failed to fetch contributors:", error);
    }
}

saveContributors()
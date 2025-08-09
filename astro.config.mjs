// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://guide.cyberelia.net",
    integrations: [
        starlight({
            title: "c y b e r e l i a",
            logo: {
                src: `./src/assets/logo.webp`,
            },
            customCss: ["./src/style/custom.css"],
            social: [
                {
                    icon: "discord",
                    label: "discord",
                    href: "https://discord.gg/xgfyfZESkv",
                },
                {
                    icon: "codeberg",
                    label: "codeberg",
                    href: "https://codeberg.org/c-h-i/cyberelia_guide",
                },
                {
                    icon: "blueSky",
                    label: "blue sky",
                    href: "https://bsky.app/profile/cyberelia.net",
                },
            ],
            sidebar: [
                {
                    label: "commands",
                    autogenerate: { directory: "commands" },
                },
                {
                    label: "reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
        sitemap(),
    ],
});

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
                    href: "https://discord.gg/qfS2EPUGuB",
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
                // {
                //     label: "roles",
                //     autogenerate: { directory: "roles" },
                // },
                {
                    label: "reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});

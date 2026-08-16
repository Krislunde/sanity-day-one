import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
        dataset: process.env.SANITY_STUDIO_DATASET!,
    },

    studioHost: process.env.SANITY_STUDIO_HOSTNAME!,

    deployment: {
        autoUpdates: true,
    },

    server: {
        port: 3334,
    },

    typegen: {
        enabled: true,
        path: '../web/src/**/*.{ts,tsx,js,jsx}',
        schema: './schema.json',
        generates: '../web/sanity.types.ts',
    },
})

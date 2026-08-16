import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    app: {
        organizationId: 'oIQaHkn4h',
        entry: './src/App.tsx',
    },
    deployment: {
        appId: 'bpirsuuxv728xxd0yxcsc8wt',
    }
})

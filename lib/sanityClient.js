import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'et5uw929',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skHVVAij0we4uabACOY3dfMenkH6R7oJHg1HN61YLa2hIVV8IOFzvyHPnNughJUy79yv50E2Qkb6cNUYCzjnoPWYCG1KWGqK6GxoG1vOLYNwPBgViktWcj101brksn2jiDMcvAyJK2ud4yrXsnxec5qXIiXYSMnS7M0tz4B6PdGV4rspnQLv',
    useCdn: false,
})
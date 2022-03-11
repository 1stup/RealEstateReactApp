import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'cav690s6',
    dataset:'production',
    apiVersion: '2021-03-25',
    token: 'skcXOjjur7uUDByWJL4UBt7R3uDKj0Pnf5qA6cdvXPJtOhwt5Rcd2qEgiUg4gCWvm72EirMqCuiJwo83gc8BEh9PdecbLwKrodpdA4TZ4EoAPFpb348rCrugiRKtxRlfigqcWqFRnPYHOrJWrHmxDvuPXOcFhp7tqhyMfrfig5K1SMV2rJMd',
    useCdn:false,

})
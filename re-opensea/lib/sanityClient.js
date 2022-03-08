import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'cav690s6',
    dataset:'production',
    apiVersion: '2021-03-25',
    token: 'skQxXzIeGlXK62vbasXvO9uzW6AzJLsuiDjBVfx2QP0YOtNTeRlzGmMD2rzLmTkjwgKjb13qEjupH4HUQbb6PvOL0s7TLOLUjjDYXBwPkwTkl24gAY5b9JNvSf4jwryZBSiNafpQIee00icyiRWNdsm0FiTr7ogYbJCit1wstQ4CBrtwritV',
    useCdn:false,

})
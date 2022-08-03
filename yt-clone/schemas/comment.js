export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text'
        },
        {
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ],
}

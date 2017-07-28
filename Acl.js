var acl = require('acl');

//  Using the memory backend
acl = new acl(new acl.memoryBackend());


acl.allow('admin', ['t1', 'test-acl'], '*');
acl.addUserRoles('redaema001', 'guest')

acl.allow([
    {
        roles:['guest', 'member'],
        allows:[
            {resources:'/t1/test-acl', permissions:'get'},
            {resources:['forums', 'news'], permissions:['get', 'put', 'delete']}
        ]
    },
    {
        roles:['gold', 'silver'],
        allows:[
            {resources:'cash', permissions:['sell', 'exchange']},
            {resources:['account', 'deposit'], permissions:['put', 'delete']}
        ]
    }
])

module.exports = acl;

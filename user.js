const users = [];

let id = 1;

const getUserHandler = (req, res) => {
    userList = users.filter(user => user.email == req.query.email && user.password == req.query.password)
    if(userList.length>0) res.json(userList[0]).status(200)
    else res.json('error').status(201)
    
};

const postUserHandler = (req, res) => {
    const newUser = {
        ...req.body,
        id: id++,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);

    res.json(newUser);
};

const routes = {
    get: [{
        path: '/user',
        handler: getUserHandler
    }],

    post: [{
        path: '/user',
        handler: postUserHandler
    }]
}

module.exports = {
    routes
};
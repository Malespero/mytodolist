const Models = require('../models/index')

//all lists
const listsHandler = async (request, h) => {
    try {
        const lists = await Models.todolistmodel.findAll({})
        return { data: lists }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

//create list
const createListsHandler = async (request, h) => {
    try {
        const { listname } = request.payload;
        const list = await Models.todolistmodel.create({
            listname: listname
        })
        return {
            data: list,
            message: 'New todo list has been created.'
        }
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

//updatelist by id
const updateListHandler = async (request, h) => {
    try {
        const list_id = request.params.list_id;
        const { listname } = request.payload;
        const list = await Models.todolistmodel.update({
          listname
        }, {
                where: {
                    list_id: list_id
                }
            })
        return {
            message: 'Todo list has been updated.'
        }

    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

//delete list by id
const deleteListHandler = async (request, h) => {
    try {
        const list_id = request.params.list_id;
        await Models.todolistmodel.destroy({
            where: {
                id: list_id
            }
        })
        return { message: 'Todo has been deleted.' }
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

module.exports = [
    { method: 'GET', path: '/lists', handler: listsHandler },
    { method: 'POST', path: '/list', handler: createListsHandler },
    { method: 'PUT', path: '/list/{list_id}', handler: updateListHandler },
    { method: 'DELETE', path: '/list/{list_id}', handler: deleteListHandler }
];

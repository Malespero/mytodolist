const Models = require('../models/index')

const todosHandler = async (request, h) => {
    try {
        const todos = await Models.TodoModel.findAll({order: [['number', 'ASC']]})
        return { data: todos }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

const createTodoHandler = async (request, h) => {
    try {
        const { text, status, number } = request.payload;
        const todo = await Models.TodoModel.create({
            text: text,
            status: status,
            number: number
        })
        return {
            data: todo,
            message: 'New todo has been created.'
        }
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

const updateTodoHandler = async (request, h) => {
    try {
        const todo_id = request.params.id;
        const { text, status, number } = request.payload;
        const todo = await Models.TodoModel.update({
          text: text,
          status: status,
          number: number
        }, {
                where: {
                    id: todo_id
                }
            })
        return {
            message: 'Todo has been updated.'
        }

    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

const deleteTodoHandler = async (request, h) => {
    try {
        const todo_id = request.params.id;
        await Models.TodoModel.destroy({
            where: {
                id: todo_id
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
    { method: 'GET', path: '/todos', handler: todosHandler },
    { method: 'POST', path: '/todo', handler: createTodoHandler },
    { method: 'PUT', path: '/todo/{id}', handler: updateTodoHandler },
    { method: 'DELETE', path: '/todo/{id}', handler: deleteTodoHandler }
];

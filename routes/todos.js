const Models = require('../models/index')

//all todos belongs to list by listid and sorted by order
const todosHandler = async (request, h) => {
    try {
        const list_id = request.params.list_id;
        const todos = await Models.TodoModel.findAll(
          {where: {todolistmodelId: list_id},
          order: [['number', 'ASC']]
        }
      )
      return { data: todos }
    }
    catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

//for tests
const todosAllHandler = async (request, h) => {
    try {
        const todos = await Models.TodoModel.findAll({order: [['number', 'ASC']]})
        return { data: todos }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

//
const createTodoHandler = async (request, h) => {
    try {
        const list_id = request.params.list_id;
        const {  text, status, number } = request.payload;
        const todo = await Models.TodoModel.create({
            text: text,
            status: status,
            number: number,
            todolistmodelId: list_id
        }
      )
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
        const list_id = request.params.list_id;
        const todo_id = request.params.id;
        const { text, status, number } = request.payload;
        const todo = await Models.TodoModel.update({
          text: text,
          status: status,
          number: number,
          todolistmodelId: list_id
        }, {
                where: {
                    todolistmodelId: list_id,
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
        const list_id = request.params.list_id;
        const todo_id = request.params.id;
        await Models.TodoModel.destroy({
            where: {
                todolistmodelId: list_id,
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
    { method: 'GET', path: '/lists/{list_id}/todos', handler: todosHandler }, // all todos for one list
    { method: 'GET', path: '/todosall', handler: todosAllHandler },//test route
    { method: 'POST', path: '/lists/{list_id}/todocreate', handler: createTodoHandler }, //create todo for specific list
    { method: 'PUT', path: '/lists/{list_id}/todos/{id}', handler: updateTodoHandler }, //update specific todo
    { method: 'DELETE', path: '/lists/{list_id}/todos/{id}', handler: deleteTodoHandler } // delete specific todo
];

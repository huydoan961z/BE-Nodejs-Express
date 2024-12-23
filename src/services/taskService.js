const {
    json
} = require('express')
const Task = require('../models/task')
const postCreateTaskService = (taskInfo) => {
    let result = Task.create(taskInfo)
    return result

}

const getAllTaskService = async () => {
    let result = await Task.find({})

    return result
}

const deleteTaskService = async (deleteTaskId) => {
    let result = await Task.delete({
        _id: deleteTaskId
    })
    return result

}
const updateTaskService = async (updateTaskId, updateTask) => {
    let result = await Task.findByIdAndUpdate(updateTaskId, updateTask)
    return result

}

module.exports = {
    postCreateTaskService,
    getAllTaskService,
    deleteTaskService,
    updateTaskService
}
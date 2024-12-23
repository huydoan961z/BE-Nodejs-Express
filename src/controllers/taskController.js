const {
    postCreateTaskService,
    getAllTaskService,
    deleteTaskService,
    updateTaskService
} = require('../services/taskService')

const postCreateTask = async (req, res) => {
    let taskInfo = req.body
    try {
        let result = await postCreateTaskService(taskInfo)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            EC: 1,
            data: error
        })

    }

}
const getAllTask = async (req, res) => {
    let result = await getAllTaskService();
    console.log(result)
    return res.status(200).json({
        EC: 0,
        data: result
    })

}

const deleteTask = async (req, res) => {
    let deleteTaskId = await req.body.id
    console.log(deleteTaskId)


    try {
        let result = deleteTaskService(deleteTaskId)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            EC: 1,
            data: error
        })

    }
}

const updateTask = async (req, res) => {
    let updateTaskId = await req.body._id
    let updateTask = await req.body
    console.log(updateTaskId)
    console.log(updateTask)



    try {
        let result = updateTaskService(updateTaskId, updateTask)

        return res.status(200).json({
            EC: 0,
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            EC: 1,
            data: error
        })

    }
}

module.exports = {
    postCreateTask,
    getAllTask,
    deleteTask,
    updateTask
}
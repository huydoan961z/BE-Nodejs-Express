const Project = require('../models/project')
const {
    createProjectService
} = require('../services/projectService')
module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProjectService(req.body)
        return res.status(200).json({
            EC: 0,
            data: result

        })

    }
}
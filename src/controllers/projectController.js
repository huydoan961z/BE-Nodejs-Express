const Project = require('../models/project')
const {
    createProjectService,
    getAllProjectService,
    getAllProjectServiceWithOutPagin
} = require('../services/projectService')
module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProjectService(req.body)
        return res.status(200).json({
            EC: 0,
            data: result

        })

    },

    getAllProject: async (req, res) => {
        let limit = req.query.limit
        let page = req.query.page
        if (limit != null && page != null) {
            let result = await getAllProjectService(limit, page);
            return res.status(200).json({
                EC: 0,
                data: result

            })
        } else {
            let result = await getAllProjectServiceWithOutPagin();
            return res.status(200).json({
                EC: 0,
                data: result

            })
        }


    }
}
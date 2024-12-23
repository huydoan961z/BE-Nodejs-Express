const Project = require('../models/project')
const {
    createProjectService,
    getAllProjectService,
    getAllProjectServiceWithOutPagin,
    deleteProjectService,
    updateProjectService,
    removeArrSubService,
    removeAllUsersService
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
    },

    deleteProject: async (req, res) => {
        let projectID = req.body.id
        console.log(projectID)
        let result = await deleteProjectService(projectID)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    updateProject: async (req, res) => {
        let updateInfo = req.body
        let id = req.body.id
        console.log(id)
        let result = await updateProjectService(id, updateInfo)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    removeArrSubController: async (req, res) => {
        let removeProjectID = req.body.id;
        let userIdsToRemove = req.body.userIdid; // Array of user IDs to remove
        console.log(removeProjectID)
        console.log(userIdsToRemove)
        try {
            let result;
            if (userIdsToRemove) {
                result = await removeArrSubService(removeProjectID, userIdsToRemove);
            } else {

                result = await removeAllUsersService(removeProjectID);
            }
            return res.status(200).json({
                EC: 0,
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                EC: 1,
                message: error.message
            });
        }
    },
    removeSingleSubController: async (req, res) => {

    }
}
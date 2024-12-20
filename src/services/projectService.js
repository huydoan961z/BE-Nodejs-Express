const Project = require('../models/project')

const createProjectService = async (projectData) => {
    if (projectData.type === "EMPTY-PROJECT") {
        let result = await Project.create(projectData)
        return result
    }
    if (projectData.type === "Add-users") {
        try {
            let findProjec = await Project.findById(projectData.projectId)
            console.log(findProjec)

            for (let i = 0; i < projectData.userArray.length; i++) {
                let useradd = projectData.userArray[i]
                if (!findProjec.usersInfor.some(x => x._id.toString() === useradd.toString())) {
                    findProjec.usersInfor.push(useradd)

                }


            }
            let finalProject = await findProjec.save()
            finalProject = await Project.findById(finalProject._id).populate("usersInfor")
            console.log("List info", finalProject.usersInfor)

            return finalProject

        } catch (error) {
            console.log(error)
        }

    }

}

module.exports = {
    createProjectService,

}
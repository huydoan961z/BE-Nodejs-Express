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
    if (projectData.type === "Add-task") {
        try {
            let findProjec = await Project.findById(projectData.projectId)
            console.log(findProjec)

            for (let i = 0; i < projectData.taskArray.length; i++) {
                let useradd = projectData.taskArray[i]
                if (!findProjec.tasks.some(x => x._id.toString() === useradd.toString())) {
                    findProjec.tasks.push(useradd)

                }


            }
            let finalProject = await findProjec.save()
            finalProject = await Project.findById(finalProject._id).populate("tasks")
            console.log("List info", finalProject.tasks)

            return finalProject

        } catch (error) {
            console.log(error)
        }

    }

}

const getAllProjectService = (limit, page) => {
    console.log(limit)
    console.log(page)

    let skip = (page - 1) * limit
    let result = Project.find({}).skip(skip).limit(limit).exec();

    return result


}
const getAllProjectServiceWithOutPagin = () => {

    let result = Project.find({})

    return result


}

const deleteProjectService = async (id) => {
    let result = await Project.delete({
        _id: id
    })

    return result
}

const updateProjectService = async (id, updateInfo) => {

    let result = await Project.findByIdAndUpdate(id, updateInfo, {
        new: true
    });
    return result
}

const removeArrSubService = async (removeProjectID, userIdsToRemove) => {
    let findProject = await Project.findById(removeProjectID);
    if (!findProject) {
        throw new Error('Project not found');
    }

    // Remove specific users from the usersInfor array
    findProject.usersInfor.pull(userIdsToRemove)

    await findProject.save();
    return findProject;
};
const removeAllUsersService = async (removeProjectID) => {
    let findProject = await Project.findById(removeProjectID);
    if (!findProject) {
        throw new Error('Project not found');
    }
    findProject.usersInfor = [];
    findProject.save();
    return findProject
}

module.exports = {
    createProjectService,
    getAllProjectService,
    getAllProjectServiceWithOutPagin,
    deleteProjectService,
    updateProjectService,
    removeArrSubService,
    removeAllUsersService

}
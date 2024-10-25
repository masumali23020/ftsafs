

const projects = [
    {
        "id": crypto.randomUUID(),
        "taskName": "todo",
        "description": "Always remember , if you work hard on ",
        "DueDate": "2024-10-24",
        "category": "To-Do"
    },
    {
        "id": crypto.randomUUID(),
        "taskName": "todo new",
        "description": "Always remember , if you work hard on ",
        "DueDate": "2024-10-24",
        "category": "To-Do"
    },
    {
        "id": crypto.randomUUID(),
        "taskName": "on Progress",
        "description": "Always remember , if you work hard on Progress ",
        "DueDate": "12/10/24",
        "category": "OnProgress"
    },
    {
        "id": crypto.randomUUID(),
        "taskName": "Done",
        "description": "Always remember , if you work hard on Done",
        "DueDate": "12/10/24",
        "category": "Done"
    },
    {
        "id": crypto.randomUUID(),
        "taskName": "Done",
        "description": "Always remember , if you work hard on Done",
        "DueDate": "12/10/24",
        "category": "Done"
    },
    {
        "id": crypto.randomUUID(),
        "taskName": "Revised",
        "description": "Always remember , if you work hard on Revised",
        "DueDate": "12/10/24",
        "category": "Revised"
    },
    {
        "id": crypto.randomUUID(),
        "taskName": "Revised",
        "description": "Always remember , if you work hard on Revised",
        "DueDate": "12/10/24",
        "category": "Revised"
    },
]

const getAllProjects = ()=> {
    return projects
}
export { getAllProjects }


const employees = [
  {
    employees: [
      {
        id: 1,
        email: "employee1@company.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            complete: false,
            failed: false,
            taskTitle: "Prepare report",
            taskDescription: "Prepare monthly sales report",
            taskDate: "2026-02-15",
            category: "Reporting"
          },
          {
            active: false,
            newTask: false,
            complete: true,
            failed: false,
            taskTitle: "Client meeting",
            taskDescription: "Discuss requirements with client",
            taskDate: "2026-02-10",
            category: "Meeting"
          },
          {
            active: false,
            newTask: false,
            complete: false,
            failed: true,
            taskTitle: "Data update",
            taskDescription: "Update customer database",
            taskDate: "2026-02-08",
            category: "Database"
          }
        ]
      },
      {
        id: 2,
        email: "employee2@company.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            complete: false,
            failed: false,
            taskTitle: "Design homepage",
            taskDescription: "Create new homepage layout",
            taskDate: "2026-02-16",
            category: "Design"
          },
          {
            active: false,
            newTask: false,
            complete: true,
            failed: false,
            taskTitle: "Fix UI bug",
            taskDescription: "Resolve navbar issue",
            taskDate: "2026-02-11",
            category: "Bug Fix"
          },
          {
            active: false,
            newTask: false,
            complete: false,
            failed: true,
            taskTitle: "Prototype review",
            taskDescription: "Review rejected prototype",
            taskDate: "2026-02-09",
            category: "Review"
          }
        ]
      },
      {
        id: 3,
        email: "employee3@company.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            complete: false,
            failed: false,
            taskTitle: "API integration",
            taskDescription: "Integrate payment API",
            taskDate: "2026-02-18",
            category: "Development"
          },
          {
            active: false,
            newTask: false,
            complete: true,
            failed: false,
            taskTitle: "Code cleanup",
            taskDescription: "Refactor old modules",
            taskDate: "2026-02-12",
            category: "Development"
          },
          {
            active: false,
            newTask: false,
            complete: false,
            failed: true,
            taskTitle: "Unit tests",
            taskDescription: "Write pending test cases",
            taskDate: "2026-02-07",
            category: "Testing"
          }
        ]
      },
      {
        id: 4,
        email: "employee4@company.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            complete: false,
            failed: false,
            taskTitle: "Server setup",
            taskDescription: "Deploy staging server",
            taskDate: "2026-02-17",
            category: "DevOps"
          },
          {
            active: false,
            newTask: false,
            complete: true,
            failed: false,
            taskTitle: "Backup creation",
            taskDescription: "Create weekly backups",
            taskDate: "2026-02-13",
            category: "Maintenance"
          },
          {
            active: false,
            newTask: false,
            complete: false,
            failed: true,
            taskTitle: "Security patch",
            taskDescription: "Apply failed security patch",
            taskDate: "2026-02-06",
            category: "Security"
          }
        ]
      },
      {
        id: 5,
        email: "employee5@company.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            complete: false,
            failed: false,
            taskTitle: "Marketing plan",
            taskDescription: "Prepare campaign strategy",
            taskDate: "2026-02-19",
            category: "Marketing"
          },
          {
            active: false,
            newTask: false,
            complete: true,
            failed: false,
            taskTitle: "Social media posts",
            taskDescription: "Schedule weekly posts",
            taskDate: "2026-02-14",
            category: "Marketing"
          },
          {
            active: false,
            newTask: false,
            complete: false,
            failed: true,
            taskTitle: "Ad campaign launch",
            taskDescription: "Campaign setup failed",
            taskDate: "2026-02-05",
            category: "Advertising"
          }
        ]
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=> {
    localStorage.setItem('employee',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
 
   console.log(employees, admin);
    
}
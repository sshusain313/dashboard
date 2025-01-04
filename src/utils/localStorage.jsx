const employees= [
      {
        "id": 1,
        "firstname": "Alice",
        "email": "shabahathusain313@gmail.com",
        "password": "123",
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Complete Report",
            "taskDescription": "Finish the quarterly financial report.",
            "taskDate": "2024-01-10",
            "category": "Finance",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Team Meeting",
            "taskDescription": "Attend the weekly team meeting.",
            "taskDate": "2024-01-12",
            "category": "Meeting",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Prepare Presentation",
            "taskDescription": "Prepare slides for the product launch.",
            "taskDate": "2024-01-15",
            "category": "Marketing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "firstname": "Bob",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Client Follow-up",
            "taskDescription": "Reach out to potential clients.",
            "taskDate": "2024-01-09",
            "category": "Sales",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Submit Proposal",
            "taskDescription": "Draft and submit project proposals.",
            "taskDate": "2024-01-14",
            "category": "Planning",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "firstname": "Charlie",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
        },
        "tasks": [
          {
            "taskTitle": "Inventory Check",
            "taskDescription": "Audit the current inventory.",
            "taskDate": "2024-01-08",
            "category": "Logistics",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Staff Training",
            "taskDescription": "Conduct training for new staff.",
            "taskDate": "2024-01-13",
            "category": "HR",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "taskTitle": "Monthly Budget",
            "taskDescription": "Prepare a draft for the monthly budget.",
            "taskDate": "2024-01-20",
            "category": "Finance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "firstname": "Diana",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 1,
          "newTask": 0,
          "completed": 0,
          "failed": 1
        },
        "tasks": [
          {
            "taskTitle": "Website Update",
            "taskDescription": "Update the homepage with the latest news.",
            "taskDate": "2024-01-11",
            "category": "IT",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Bug Fixing",
            "taskDescription": "Resolve bugs reported by QA.",
            "taskDate": "2024-01-15",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "firstname": "Ethan",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "taskTitle": "Social Media Campaign",
            "taskDescription": "Design and launch a social media campaign.",
            "taskDate": "2024-01-10",
            "category": "Marketing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Market Research",
            "taskDescription": "Analyze competitor strategies.",
            "taskDate": "2024-01-17",
            "category": "Research",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Content Writing",
            "taskDescription": "Write blog posts for the upcoming event.",
            "taskDate": "2024-01-25",
            "category": "Content",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
];

const admin=[
    {
      "id": 1,
      "firstname": "Shabahat",
      "email": "shabahatsyed101@gmail.com",
      "password": "313"
    }
];
  
export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
}


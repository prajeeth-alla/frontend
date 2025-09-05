export const employeeFormConfig = {
    formName: "employeeForm",
    fields: [
      {
        name: "employeeId",
        label: "Employee ID",
        type: "text",
        placeholder: "Enter employee ID",
        validations: [
          { name: "required", message: "Employee ID is required" },
          { name: "minlength", value: 4, message: "Minimum 4 characters required" }
        ]
      },
      {
        name: "department",
        label: "Department",
        type: "select",
        options: ["HR", "Engineering", "Sales", "Marketing"],
        validations: [
          { name: "required", message: "Department is required" }
        ]
      },
      {
        name: "joiningDate",
        label: "Joining Date",
        type: "date",
        validations: [
          { name: "required", message: "Joining date is required" }
        ]
      },
      {
        name: "isRemote",
        label: "Remote Worker?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        name: "workLocation",
        label: "Work Location",
        type: "text",
        placeholder: "Enter office location",
        showIf: { field: "isRemote", value: "No" },
        customValidators: [
          {
            name: "requiredIf",
            fieldToMatch: "isRemote",
            matchValue: "No",
            message: "Location is required for non-remote workers"
          }
        ]
      },
      {
        name: "skills",
        label: "Skills",
        type: "checkbox",
        options: ["JavaScript", "Python", "Angular", "React", "Node.js"]
      },
      {
        name: "resume",
        label: "Upload Resume",
        type: "file",
        validations: [
          { name: "required", message: "Resume is required" }
        ]
      },
      {
        name: "hasLaptop",
        label: "Company Laptop Provided?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        name: "laptopSerialNumber",
        label: "Laptop Serial Number",
        type: "text",
        showIf: { field: "hasLaptop", value: "Yes" },
        customValidators: [
          {
            name: "requiredIf",
            fieldToMatch: "hasLaptop",
            matchValue: "Yes",
            message: "Serial number required if laptop provided"
          }
        ]
      }
    ]
  };
  
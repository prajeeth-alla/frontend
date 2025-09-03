export const userFormConfig = {
    formName: "userForm",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your name",
        validations: [
          { name: "required", message: "Name is required" },
          { name: "minlength", value: 3, message: "Minimum 3 characters required" }
        ]
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        options: ["India", "USA", "UK", "Canada"],
        validations: [
          { name: "required", message: "Country is required" }
        ]
      },
      {
        name: "age",
        label: "Age",
        type: "text",
        placeholder: "Enter your age",
        validations: [
          { name: "min", value: 18, message: "Age must be at least 18" },
          { name: "max", value: 100, message: "Age must be less than or equal to 100" }
        ],
        showIf: { field: "country", value: "India" },
        customValidators: [
          {
            name: "requiredIfCountry",
            fieldToMatch: "country",
            matchValue: "India",
            message: "Age is required when country is India"
          }
        ]
      },
      {
        name: "gender",
        label: "Gender",
        type: "checkbox",
        options: ["Male", "Female", "Other"],
        validations: []
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter password",
        validations: [
          { name: "required", message: "Password is required" },
          { name: "minlength", value: 6, message: "Password must be at least 6 characters" }
        ]
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Re-enter password",
        validations: [
          { name: "required", message: "Confirm Password is required" },
          { name: "match", "fieldToMatch": "password", message: "Passwords do not match" }
        ],
        customValidators: [
          { name: 'matchField', fieldToMatch: 'password', message: 'Passwords do not match' }
        ]
      },
      {
        name: "residency",
        label: "Residency Type",
        type: "radio",
        options: ["Indian", "NRI"],
        validations: [{ name: "required", message: "Residency type is required" }]
      },
      {
        name: "aadhaarImage",
        label: "Aadhaar Image",
        type: "file",
        placeholder: "Upload Aadhaar image",
        validations: [],
        customValidators: [
          { name: "requiredIfIndian", fieldToMatch: "residency", matchValue: "Indian", message: "Aadhaar image is required for Indians" }
        ]
      }
    ]
  };
  
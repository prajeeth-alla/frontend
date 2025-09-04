export const vehicleFormConfig = {
  formName: 'vehicleForm',
  fields: [
    // Owner
    {
      name: 'ownerName',
      label: 'Owner Name',
      type: 'text',
      validations: [{ name: 'required', message: 'Owner name is required' }],
    },
    { name: 'isOwnerDriver', label: 'Is Owner the Driver?', type: 'radio', options: ['Yes', 'No'] },
    {
      name: 'driverLicense',
      label: 'Driver License',
      type: 'text',
      showIf: { field: 'isOwnerDriver', value: 'No' },
      customValidators: [
        {
          name: 'requiredIf',
          fieldToMatch: 'isOwnerDriver',
          matchValue: 'No',
          message: 'License required if owner not driver',
        },
      ],
    },

    // Vehicle Identity
    {
      name: 'vehicleType',
      label: 'Type',
      type: 'select',
      options: ['Car', 'Bike', 'Truck', 'Bus', 'Other'],
      validations: [{ name: 'required', message: 'Type required' }],
    },
    {
      name: 'make',
      label: 'Manufacturer',
      type: 'text',
      validations: [{ name: 'required', message: 'Required' }],
    },
    { name: 'model', label: 'Model', type: 'text' },
    {
      name: 'year',
      label: 'Manufacture Year',
      type: 'number',
      validations: [{ name: 'min', value: 1980, message: 'Must be after 1980' }],
    },
    {
      name: 'fuelType',
      label: 'Fuel Type',
      type: 'radio',
      options: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG'],
    },

    // Registration & Docs
    {
      name: 'registrationNumber',
      label: 'Registration No',
      type: 'text',
      validations: [
        { name: 'pattern', value: '^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$', message: 'Invalid format' },
      ],
    },
    { name: 'chassisNumber', label: 'Chassis No', type: 'text' },
    { name: 'engineNumber', label: 'Engine No', type: 'text' },
    {
      name: 'rcBook',
      label: 'RC Book Upload',
      type: 'file',
      validations: [{ name: 'required', message: 'RC Book required' }],
    },

    // Insurance
    { name: 'insurance', label: 'Has Insurance?', type: 'radio', options: ['Yes', 'No'] },
    {
      name: 'insuranceNumber',
      label: 'Policy Number',
      type: 'text',
      showIf: { field: 'insurance', value: 'Yes' },
    },
    {
      name: 'insuranceExpiry',
      label: 'Expiry Date',
      type: 'date',
      showIf: { field: 'insurance', value: 'Yes' },
    },

    // Usage (Private / Commercial)
    { name: 'usageType', label: 'Usage', type: 'radio', options: ['Private', 'Commercial'] },
    {
      name: 'permitNumber',
      label: 'Permit No',
      type: 'text',
      showIf: { field: 'usageType', value: 'Commercial' },
    },
    {
      name: 'capacity',
      label: 'Capacity',
      type: 'number',
      showIf: { field: 'usageType', value: 'Commercial' },
    },

    // Finance
    { name: 'isFinanced', label: 'Financed?', type: 'radio', options: ['Yes', 'No'] },
    {
      name: 'loanProvider',
      label: 'Loan Provider',
      type: 'text',
      showIf: { field: 'isFinanced', value: 'Yes' },
    },
    {
      name: 'emiAmount',
      label: 'EMI Amount',
      type: 'number',
      showIf: { field: 'isFinanced', value: 'Yes' },
    },

    // EV Specific
    {
      name: 'electricBattery',
      label: 'Battery Serial',
      type: 'text',
      showIf: { field: 'fuelType', value: 'Electric' },
    },
    {
      name: 'hasCharger',
      label: 'Home Charger?',
      type: 'radio',
      options: ['Yes', 'No'],
      showIf: { field: 'fuelType', value: 'Electric' },
    },
    {
      name: 'chargerCapacity',
      label: 'Charger Capacity (kW)',
      type: 'number',
      showIf: { field: 'hasCharger', value: 'Yes' },
    },

    // Import Vehicle
    { name: 'isImported', label: 'Imported?', type: 'radio', options: ['Yes', 'No'] },
    {
      name: 'importCountry',
      label: 'Import Country',
      type: 'text',
      showIf: { field: 'isImported', value: 'Yes' },
    },
    {
      name: 'customsNumber',
      label: 'Customs No',
      type: 'text',
      showIf: { field: 'isImported', value: 'Yes' },
    },

    // Pollution Certificate (conditional on fuel type)
    {
      name: 'pollutionCertificate',
      label: 'PUC Certificate',
      type: 'file',
      customValidators: [
        {
          name: 'requiredIf',
          fieldToMatch: 'fuelType',
          matchValue: 'Petrol',
          message: 'PUC required for Petrol vehicles',
        },
        {
          name: 'requiredIf',
          fieldToMatch: 'fuelType',
          matchValue: 'Diesel',
          message: 'PUC required for Diesel vehicles',
        },
      ],
    },
  ],
};

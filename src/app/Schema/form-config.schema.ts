import { z } from 'zod';
import { userFormConfig } from '../Config/user-form.config';

export function buildZodSchema(config: any) {
  let schema: any = {};

  config.fields.forEach((field: any) => {
    let validator: any;

    if (field.type === 'text' || field.type === 'password') {
      validator = z.string();
      field.validations?.forEach((val: any) => {
        if (val.name === 'required') {
          validator = validator.min(1, val.message);
        }
        if (val.name === 'minlength') {
          validator = validator.min(val.value, val.message);
        }
        if (val.name === 'email') {
          validator = z.string().email(val.message);
        }
      });
    }

    if (field.type === 'select' || field.type === 'radio') {
      validator = z.string().min(1, `${field.label} is required`);
    }

    if (field.type === 'checkbox') {
      validator = z.array(z.string()).min(1, `${field.label} is required`);
    }

    if (field.type === "file") {
      validator = z.any().nullable();
    }

    if (!field.showIf) {
      schema[field.name] = validator;
    } else {
      schema[field.name] = validator.optional();
    }
  });

  let zodSchema: z.ZodTypeAny = z.object(schema);

  // Handle custom validators dynamically
  zodSchema = zodSchema.superRefine((data, ctx) => {
    config.fields.forEach((field: any) => {
      field.customValidators?.forEach((cv: any) => {
        if (cv.name === 'matchField') {
          if (data[field.name] !== data[cv.fieldToMatch]) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: [field.name],
              message: cv.message
            });
          }
        }

        // radio button ZOD 

        if (cv.name === "requiredIfIndian") {
          if (data[cv.fieldToMatch] === cv.matchValue && !data[field.name]) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: [field.name],
              message: cv.message,
            });
          }
        }
      });


      // Age validation if country = India

      if (field.showIf) {
        const dependsOn = field.showIf.field;
        const matchValue = field.showIf.value;

        if (data[dependsOn] === matchValue) {
          const val = data[field.name];

          if (!val || (typeof val === 'string' && val.trim() === '')) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: [field.name],
              message: `${field.label} is required when ${dependsOn} is ${matchValue}`,
            });
          }

          if (field.name === 'age' && data['country'] === 'India') {
            const val = data[field.name];
            if (!val || val.trim() === '') {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: [field.name],
                message: 'Age is required when country is India',
              });
            } else {
              const ageNum = Number(val);
              if (isNaN(ageNum)) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: [field.name],
                  message: 'Age must be a number',
                });
              } else if (ageNum < 18 || ageNum > 100) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: [field.name],
                  message: 'Age must be between 18 and 100',
                });
              }
            }
          }
        }
      }
    });
  });


  return zodSchema;

}

export const userZodSchema = buildZodSchema(userFormConfig);

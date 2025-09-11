import { z } from 'zod';
 
export function generateVehicleFormSchema() {
  return z.object({
    rooftop_id: z.number().nullable(),
    make: z.string().min(2, { message: 'Make is required' }),
    model: z.string().min(2, { message: 'Model is required' }),
    year: z
      .number()
      .refine((v) => v >= 1886 && v <= new Date().getFullYear() + 1, {
        message: 'Enter a valid year',
      }),
    veh_listing_type: z.union([z.literal('New'), z.literal('Used')]),
    trim: z.string().min(2, { message: 'Trim is required' }),
    body_type: z.string().min(2, { message: 'Body type is required' }),
    ext_color: z.string().min(2, { message: 'Exterior color is required' }),
    engine: z.string().min(2, { message: 'Engine is required' }),
    miles: z.string().min(2, { message: 'Mileage is required' }),
    status: z.string().min(2, { message: 'Status is required' }),
  });
}

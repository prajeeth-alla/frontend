import { z } from 'zod';

export function generateVehicleFormSchema() {
  return z.object({
    rooftop_id: z.number().nullable(),
    make: z.string().min(1, { message: 'Make is required' }),
    model: z.string().min(1, { message: 'Model is required' }),
    year: z
      .number()
      .nullable()
      .refine((v) => v === null || (v >= 1886 && v <= new Date().getFullYear() + 1), {
        message: 'Enter a valid year',
      }),
    veh_listing_type: z.union([z.literal('New'), z.literal('Used'), z.null()]),
    trim: z.string().nullable(),
    body_type: z.string().nullable(),
    ext_color: z.string().nullable(),
    engine: z.string().nullable(),
    miles: z.string().nullable(),
    status: z.string().nullable(),
  });
}

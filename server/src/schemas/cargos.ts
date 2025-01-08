import { z } from 'zod';

export const CargoSchema = z.object({
  codigo: z.preprocess((val) => Number(val), z.number({
    message: 'El id debe ser un número',
    required_error: 'el id es requerido',
  }).min(1).max(99)),
  descripcion: z.string({
    message: 'el nombre debe ser una cadena de texto',
    required_error: 'el nombre es requerido',
  }).min(3).max(120),
});

export const verifyCargo = async (cargo: unknown) => {
  return await CargoSchema.safeParseAsync(cargo);
}
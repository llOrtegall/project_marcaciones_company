import { getMarcaciones, getAuditMarcacion } from '../controllers/marcacion.controllers';
import { Router } from "express";

export const marcacionRouter = Router();

marcacionRouter.get('/marcaciones', getMarcaciones);

marcacionRouter.post('/audit-marcacion', getAuditMarcacion);
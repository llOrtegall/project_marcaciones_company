import { createBrowserRouter } from 'react-router-dom';

import GrupovsTurno from '@/pages/opciones/views/GrupovsTurno';
import GrupoTurno from '@/pages/opciones/views/GrupoTurno';
import Cargos from '@/pages/opciones/views/Cargos';
import Turnos from '@/pages/opciones/views/Turnos';
import Areas from '@/pages/opciones/views/Areas';
import PersonasView from '@/pages/persona';
import Marcacion from '@/pages/marcacion';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';

import Root from './root';
import InfoPersona from '@/pages/persona/InfoPersona';
import AuditMarcacion from '@/pages/marcacion/AuditMarcacion';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/empleados',
        element: <PersonasView />,
      },
      {
        path: '/empleado/:id',
        element: <InfoPersona />,
      },
      {
        path: '/marcacion',
        element: <Marcacion />,
      },
      {
        path: '/audit-marcacion',
        element: <AuditMarcacion />,
      },
      {
        path: '/areas',
        element: <Areas />
      },
      {
        path: '/cargos',
        element: <Cargos />
      },
      {
        path: '/grupoturno',
        element: <GrupoTurno />
      },
      {
        path: '/turnos',
        element: <Turnos />
      },
      {
        path: '/grupo-turno',
        element: <GrupovsTurno />
      }
    ]
  }
]);

import { Correo } from './../../correo/interfaces/correo.interface'
import { v4 as uuid } from 'uuid';

export const CORREO_SEED: Correo[] = [


    {
        id: uuid(),
        email: 'gmail',
        usuario: 'user.name',
        telefono: '557237832',
    },
    {
        id: uuid(),
        email: 'cloud',
        usuario: 'name.user',
        telefono: '8465495934',
    },
    {
        id: uuid(),
        email: 'live',
        usuario: 'jason.ss',
        telefono: '557273928',
    },
]
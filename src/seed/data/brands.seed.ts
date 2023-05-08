import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [


    {
        id: uuid(),
        email: 'gmail',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        email: 'cloud',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        email: 'live',
        createdAt: new Date().getTime(),
    }, 
    {
        id: uuid(),
        email: 'hotmail',
        createdAt: new Date().getTime(),
    },
    
    
  
]
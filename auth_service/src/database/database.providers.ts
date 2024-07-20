import * as mongoose from 'mongoose';
import { join } from 'path'

export const databaseProviders = [
    {
        provide: `${'user'}_CONNECTION`,
        useFactory: async () => {
            return mongoose.connect(join('mongodb://127.0.0.1:27017/', 'nestjs'))
                .then(() => console.log('database connected to user'))
                .catch(() => console.log('database connection failed'));
        },
    },
];

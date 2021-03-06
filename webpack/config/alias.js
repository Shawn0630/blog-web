/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
    '~src': join(rootDir, '/src'),
    '~images': join(rootDir, '/src/images'),
    '~styles': join(rootDir, '/src/styles'),
    '~reducers': join(rootDir, '/src/reducers'),
    '~models': join(rootDir, 'src/models'),
    '~utilities': join(rootDir, 'src/utilities'),
    '~app': join(rootDir, '/src/components'),
};

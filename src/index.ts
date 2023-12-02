import { CONFIG } from './config.js';

const { feature } = CONFIG;

try {

    await feature.action();

} catch (error) {

    console.error(error);
}

export const FEATURE = feature;

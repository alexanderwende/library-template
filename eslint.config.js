import { create } from '@alexwende/eslint-config';

export default create({
    typescript: {
        files: ['src/**/*.ts'],
    },
    style: true,
    ignores: ['dist/'],
});

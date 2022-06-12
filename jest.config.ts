const config = {
  preset: 'jest-preset-angular/presets/defaults',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/test.base.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  moduleNameMapper: {
    "@app-core(.*)": "<rootDir>/src/app/core/$1"
  },
  moduleDirectories: ['node_modules', '.'],
};

export default config;

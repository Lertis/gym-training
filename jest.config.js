// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	preset: "jest-preset-angular",
	setupFilesAfterEnv: [
		"<rootDir>/test-jest.ts"
	],
	testMatch: [
		"**/?(*.)+(spec).+(ts)?(x)"
	],
	globals: {
		"ts-jest": {
			"tsconfig": "./tsconfig.spec.json"
		}
	},
	coverageDirectory: "./coverage/jest",
	coverageReporters: [
		"html",
		"lcovonly"
	],
	coverageThreshold: {
		"global": {
			"statements": 90,
			"lines": 90,
			"branches": 90,
			"functions": 90
		}
	},
	coveragePathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/dist/",
		"<rootDir>/coverage/",
		"<rootDir>/_test/"
	]
};

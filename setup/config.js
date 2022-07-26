// Constants
const OUTPUT_HTML = "index.html";
const IMAGE_DIR = "img";
const PUBLIC_DIRS = [IMAGE_DIR, "css", "js"];
const PORT_START = process.env.PORT || 9003;
const CORS_ORIGINS = {
	origin: ["localhost", "https://mambojs.dev"],
	optionsSuccessStatus: 200,
};

module.exports = {
	OUTPUT_HTML,
	PUBLIC_DIRS,
	CORS_ORIGINS,
	PORT_START,
	system: {
		publicDirectories: PUBLIC_DIRS,
		imagesDirectory: IMAGE_DIR,
		host: {
			port: PORT_START,
		},
	},
};

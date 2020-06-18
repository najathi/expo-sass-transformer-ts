const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
	const {
		resolver: { sourceExts }
	} = await getDefaultConfig();
	return {
		transformer: {
			babelTransformerPath: require.resolve("./transformer.js")
		},
		resolver: {
			sourceExts: [...sourceExts, "scss", "sass"]
		}
	};
})();
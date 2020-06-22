var upstreamTransformer = require("metro-react-native-babel-transformer");
var sassTransformer = require("react-native-sass-transformer");
// var sassTransformer = require("react-native-typed-sass-transformer");

module.exports.transform = function ({ src, filename, options }) {
	if (filename.endsWith(".scss") || filename.endsWith(".sass")) {
		var opts = Object.assign(options, {
			sassOptions: {
				functions: {
					"rem($px)": px => {
						px.setValue(px.getValue() / 16);
						px.setUnit("rem");
						return px;
					}
				}
			}
		});

		return sassTransformer.transform({ src, filename, options: opts });
	} else {
		return upstreamTransformer.transform({ src, filename, options });
	}
};
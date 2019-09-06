exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === 'build-html') {
		config.loader('null', {
			test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter|react-mapbox-gl|react-mapbox-gl|react-map-gl|(mapbox-gl)\.js$/,
			loader: 'null-loader',
		})
	}
}

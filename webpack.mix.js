const mix = require('laravel-mix');

 mix.postCss("src/style.css", "css", [
		require("tailwindcss"),
	]);
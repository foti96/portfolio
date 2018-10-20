var elixir = require("laravel-elixir");
require("laravel-elixir-rollup-official");

elixir.config.assetsPath = "themes/ninjadojo/assets/";
elixir.config.publicPath = "themes/ninjadojo/assets/build";

elixir(function(mix) {
	mix.sass("master.scss");
});

// This file turns off obfuscation (no longer needing byte-shifting with offset 13, see https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Automatic_Mozilla_Configurator/Locked_config_settings )
// place this file in */Mozilla/defaults/pref/
pref("general.config.filename", "Updated_about_config_settings.cfg");
pref('general.config.obscure_value', 0);

// This file contains the updated settings for your browser (firefox and/or pale moon), hereby making it faster and safer
// It is to be copied to palemoon folder by the LES_internet_speed_increase_B.sh script, and will then automatically be used by palemoon

// This file was made after reading http://web.mit.edu/~firefox/www/maintainers/autoconfig.html ,
// https://developer.mozilla.org/en-US/docs/MCD%2C_Mission_Control_Desktop_AKA_AutoConfig#AutoConfig_Directives
// and https://mike.kaply.com/2012/03/15/customizing-firefox-default-preference-files/

// Settings were inspired by 
// http://crunchbang.org/forums/viewtopic.php?id=24722 and
// http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/ 

// Turn off obfuscation (no longer needing byte-shifting with offset 13, see https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Automatic_Mozilla_Configurator/Locked_config_settings )
pref('general.config.obscure_value', 0);


// ABOUT:PREFERENCES settings
// Change start page to personal (offline) webpage; note that this can only be set with a complex preference, see https://mike.kaply.com/2012/08/29/setting-the-default-firefox-homepage-with-autoconfig/
defaultPref("browser.startup.homepage", "data:text/plain,browser.startup.homepage=file:///home/*/up_and_downloads/Postinstallation.html")

// Set download directory
defaultPref("browser.download.lastDir", "file:///home/*/up_and_downloads/");

// Erase form data, cookies and password data on shutdown, keep rest in history however
defaultPref("privacy.sanitize.sanitizeOnShutdown", true);
defaultPref("privacy.clearOnShutdown.cache", false);
defaultPref("privacy.clearOnShutdown.cookies", true);
defaultPref("privacy.clearOnShutdown.downloads", false);
defaultPref("privacy.clearOnShutdown.formdata", true);
defaultPref("privacy.clearOnShutdown.history", false);
defaultPref("privacy.clearOnShutdown.offlineApps", false);
defaultPref("privacy.clearOnShutdown.passwords", true);
defaultPref("privacy.clearOnShutdown.sessions", true); 
defaultPref("privacy.clearOnShutdown.siteSettings", false);
defaultPref("privacy.cpd.cache", false);
defaultPref("privacy.cpd.cookies", true);
defaultPref("privacy.cpd.downloads", false);
defaultPref("privacy.cpd.formdata", true);
defaultPref("privacy.cpd.history", false);
user_pref("privacy.cpd.offlineApps", false);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", false);

// Make all webcontent requiring a plugin (i.e. Java, Flash, Silverlight, Adobe Reader, QuickTime) click to play
user_pref("plugins.click_to_play", true);

// Disable auto cache management and limit size of downloaded history to 50 MB
user_pref("browser.cache.disk.capacity", 51200);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk.smart_size.use_old_max", false);

// Disallow sites to choose their own fonts, set Arial as default
user_pref("browser.display.use_document_fonts", 1);
user_pref("gfx.downloadable_fonts.enabled", true);
user_pref("font.name.serif.x-western", "Arial");

// Set browser language to English
user_pref("intl.accept_languages", "en");


// ABOUT:CONFIG settings

// Disable "slow startup" warnings, disk history, welcomes, intros, EULA, default browser check
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable useless multimedia things (keeping stats, speech recognision)
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.video_stats.enabled", false);

// Disable localization (user prefs):
user_pref("geo.wifi.uri", "http://127.0.0.1");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");

// Disable browser and plugins auto update, update browser search though
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);
user_pref("browser.search.update", true);
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("plugins.update.notifyUser", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Disable telemetry, health reports, experiments
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("network.allow-experiments", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
user_pref("browser.selfsupport.url", "");
user_pref("loop.enabled", false);
user_pref("browser.pocket.enabled", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);

// Disable mozilla's "safebrowsing" and "tracking protection"
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.gethashURL", "");
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.reportErrorURL", "");
user_pref("browser.safebrowsing.reportGenericURL", "");
user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
user_pref("browser.safebrowsing.reportMalwareURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.reportURL", "");
user_pref("browser.safebrowsing.updateURL", "");
user_pref("privacy.trackingprotection.enabled", false);
user_pref("browser.polaris.enabled", false);
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.trackingprotection.getupdateURL", "");
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Enable donottrack headers
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);


// Disable browser cache offline capacity, online history capacity limited, see user pref above:
lockPref("browser.cache.disk_cache_ssl", false);
lockPref("browser.cache.offline.enable", false);
lockPref("browser.cache.disk.smart_size.enabled", false);
lockPref("browser.cache.disk.smart_size.first_run", false);
lockPref("browser.cache.offline.capacity:", 0);
lockPref("dom.indexedDB.enabled", false);
lockPref("dom.battery.enabled", false);

// Disable history & localization:
lockPref("browser.search.suggest.enabled", false);
lockPref("browser.sessionstore.resume_from_crash", false);
lockPref("geo.enabled", false);
lockPref("browser.bookmarks.restore_default_bookmarks", false);

// Misc other tweaks:
lockPref("keyword.enabled", false);
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);
lockPref("dom.disable_window_open_feature.menubar", true);
lockPref("dom.disable_window_open_feature.personalbar", true);
lockPref("dom.disable_window_open_feature.scrollbars", true);
lockPref("dom.disable_window_open_feature.toolbar", true);
lockPref("browser.identity.ssl_domain_display", 1);
lockPref("browser.urlbar.autocomplete.enabled", false);
lockPref("browser.urlbar.trimURL", false);
lockPref("browser.fixup.alternate.enabled", false);
lockPref("network.http.sendSecureXSiteReferrer", false);
lockPref("network.http.spdy.enabled", false);
lockPref("plugins.click_to_play", true);
lockPref("security.enable_tls_session_tickets", false);
lockPref("security.ssl.enable_false_start", true);
lockPref("extensions.blocklist.enabled", false);
lockPref("webgl.disabled", true);
lockPref("network.websocket.enabled", false);

// Make your browsing faster:
lockPref("network.http.pipelining", true);
lockPref("network.http.pipelining.ssl", true);
lockPref("network.http.max-persistent-connections-per-proxy", 0);
lockPref("network.http.max-persistent-connections-per-server", 10);
lockPref("network.http.max-connections-per-server", 15);
lockPref("network.http.pipelining.maxrequests", 15);
lockPref("network.http.redirection-limit", 5);
lockPref("network.dns.disableIPv6", true);
lockPref("network.http.fast-fallback-to-IPv4", false);
lockPref("dom.popup_maximum", 10);
lockPref("network.prefetch-next", false);
lockPref("browser.backspace_action", 0);
lockPref("browser.sessionstore.max_tabs_undo", 5);
lockPref("browser.sessionhistory.max_entries", 5);
lockPref("browser.sessionstore.max_windows_undo", 1);
lockPref("browser.sessionstore.max_resumed_crashes", 0);
lockPref("browser.sessionhistory.max_total_viewers", 0);
lockPref("browser.tabs.animate", 0);

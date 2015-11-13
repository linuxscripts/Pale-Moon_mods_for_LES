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


// ABOUT:PREFERENCES and ABOUT:CONFIG settings

// Change start page to personal (offline) webpage; note that this can only be set with a complex preference, see https://mike.kaply.com/2012/08/29/setting-the-default-firefox-homepage-with-autoconfig/
defaultPref("browser.startup.homepage", "data:text/plain,browser.startup.homepage=file:///home/*/up_and_downloads/Postinstallation.html")
defaultPref("startup.homepage_welcome_url", "");
defaultPref("startup.homepage_override_url", "");

// Set browser language to English
defaultPref("intl.accept_languages", "en");

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
defaultPref("privacy.cpd.offlineApps", false);
defaultPref("privacy.cpd.passwords", true);
defaultPref("privacy.cpd.sessions", true);
defaultPref("privacy.cpd.siteSettings", false);

// Disable some of the history:
defaultPref("browser.search.suggest.enabled", false);
defaultPref("browser.sessionstore.resume_from_crash", false);
defaultPref("browser.bookmarks.restore_default_bookmarks", false);
defaultPref("browser.pagethumbnails.capturing_disabled", true);
defaultPref("pageThumbs.enabled", false);

// Disable browser cache offline capacity, online history capacity limited, see user pref above:
defaultPref("browser.cache.disk_cache_ssl", false);
defaultPref("browser.cache.offline.enable", false);
defaultPref("browser.cache.disk.smart_size.enabled", false);
defaultPref("browser.cache.disk.smart_size.first_run", false);
defaultPref("browser.cache.offline.capacity:", 0);
defaultPref("dom.indexedDB.enabled", false);
defaultPref("dom.battery.enabled", false);

// Disable auto cache management and limit size of downloaded history to 50 MB
defaultPref("browser.cache.disk.capacity", 51200);
defaultPref("browser.cache.disk.smart_size.enabled", false);
defaultPref("browser.cache.disk.smart_size.first_run", false);
defaultPref("browser.cache.disk.smart_size.use_old_max", false);

// Disallow sites to choose their own fonts, set Arial as default
defaultPref("browser.display.use_document_fonts", 1);
defaultPref("gfx.downloadable_fonts.enabled", true);
defaultPref("font.name.serif.x-western", "Arial");

// Disable localization:
defaultPref("geo.wifi.uri", "http://127.0.0.1");
defaultPref("geo.enabled", false);
defaultPref("browser.search.geoip.url", "");
defaultPref("browser.search.countryCode", "US");
defaultPref("browser.search.region", "US");

// Some privacy and security tweaks:
defaultPref("keyword.enabled", false);
defaultPref("network.dns.disablePrefetch", true);
defaultPref("network.dns.disablePrefetchFromHTTPS", true);
defaultPref("dom.disable_window_open_feature.menubar", true);
defaultPref("dom.disable_window_open_feature.personalbar", true);
defaultPref("dom.disable_window_open_feature.scrollbars", true);
defaultPref("dom.disable_window_open_feature.toolbar", true);
defaultPref("browser.identity.ssl_domain_display", 1);
defaultPref("browser.urlbar.autocomplete.enabled", false);
defaultPref("browser.urlbar.trimURL", false);
defaultPref("browser.fixup.alternate.enabled", false);
defaultPref("network.http.sendSecureXSiteReferrer", false);
defaultPref("network.http.spdy.enabled", false);
defaultPref("network.http.spdy.enabled.v3-1", false);
defaultPref("plugins.click_to_play", true);
defaultPref("security.enable_tls_session_tickets", false);
defaultPref("security.ssl.enable_false_start", true);
defaultPref("extensions.blocklist.enabled", false);
defaultPref("webgl.disabled", true);
defaultPref("network.websocket.enabled", false);

// Make all webcontent requiring a plugin (i.e. Java, Flash, Silverlight, Adobe Reader, QuickTime) click to play
defaultPref("plugins.click_to_play", true);

// Disable browser and plugins auto update, update browser search though
defaultPref("app.update.enabled", false);
defaultPref("app.update.auto", false);
defaultPref("browser.search.update", true);
defaultPref("extensions.update.enabled", false);
defaultPref("extensions.update.autoUpdateDefault", false);
defaultPref("extensions.getAddons.cache.enabled", false);
defaultPref("lightweightThemes.update.enabled", false);
defaultPref("plugins.update.notifyUser", false);
defaultPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
defaultPref("dom.ipc.plugins.reportCrashURL", false);

// Enable donottrack headers
defaultPref("privacy.donottrackheader.enabled", true);
defaultPref("privacy.donottrackheader.value", 1);

// Make your browsing faster:
defaultPref("network.http.pipelining", true);
defaultPref("network.http.pipelining.ssl", true);
defaultPref("network.http.max-persistent-connections-per-proxy", 0);
defaultPref("network.http.max-persistent-connections-per-server", 10);
defaultPref("network.http.max-connections-per-server", 15);
defaultPref("network.http.pipelining.maxrequests", 15);
defaultPref("network.http.redirection-limit", 5);
defaultPref("network.dns.disableIPv6", true);
defaultPref("network.http.fast-fallback-to-IPv4", false);
defaultPref("dom.popup_maximum", 10);
defaultPref("network.prefetch-next", false);
defaultPref("browser.backspace_action", 0);
defaultPref("browser.sessionstore.max_tabs_undo", 5);
defaultPref("browser.sessionhistory.max_entries", 5);
defaultPref("browser.sessionstore.max_windows_undo", 1);
defaultPref("browser.sessionstore.max_resumed_crashes", 0);
defaultPref("browser.sessionhistory.max_total_viewers", 0);
defaultPref("browser.tabs.animate", 0);

// Disable "slow startup" warnings, disk history, welcomes, intros, EULA, default browser check
defaultPref("browser.slowStartup.notificationDisabled", true);
defaultPref("browser.slowStartup.maxSamples", 0);
defaultPref("browser.slowStartup.samples", 0);
defaultPref("browser.rights.3.shown", true);
defaultPref("browser.startup.homepage_override.mstone", "ignore");
defaultPref("browser.feeds.showFirstRunUI", false);
defaultPref("browser.shell.checkDefaultBrowser", false);

// Disable useless multimedia things (keeping stats, speech recognision)
defaultPref("media.webspeech.recognition.enable", false);
defaultPref("media.video_stats.enabled", false);

// Disable telemetry, health reports, experiments
defaultPref("toolkit.telemetry.unified", false);
defaultPref("toolkit.telemetry.enabled", false);
defaultPref("toolkit.telemetry.server", "");
defaultPref("toolkit.telemetry.archive.enabled", false);
defaultPref("datareporting.healthreport.uploadEnabled", false);
defaultPref("datareporting.healthreport.documentServerURI", "");
defaultPref("datareporting.healthreport.service.enabled", false);
defaultPref("datareporting.policy.dataSubmissionEnabled", false);
defaultPref("experiments.enabled", false);
defaultPref("experiments.manifest.uri", "");
defaultPref("experiments.supported", false);
defaultPref("experiments.activeExperiment", false);
defaultPref("network.allow-experiments", false);
defaultPref("breakpad.reportURL", "");
defaultPref("browser.newtab.preload", false);
defaultPref("browser.newtabpage.directory.ping", "");
defaultPref("browser.newtabpage.directory.source", "");
defaultPref("browser.newtabpage.enabled", false);
defaultPref("browser.newtabpage.enhanced", false);
defaultPref("browser.newtabpage.introShown", true);
defaultPref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
defaultPref("browser.selfsupport.url", "");
defaultPref("loop.enabled", false);
defaultPref("browser.pocket.enabled", false);
defaultPref("reader.parse-on-load.enabled", false);
defaultPref("browser.pocket.api", "");
defaultPref("browser.pocket.site", "");
defaultPref("social.whitelist", "");
defaultPref("social.toast-notifications.enabled", false);
defaultPref("social.shareDirectory", "");
defaultPref("social.remote-install.enabled", false);
defaultPref("social.directories", "");
defaultPref("social.share.activationPanelEnabled", false);

// Disable mozilla's "safebrowsing" and "tracking protection", add additional security
defaultPref("browser.safebrowsing.malware.enabled", false);
defaultPref("browser.safebrowsing.downloads.enabled", false);
defaultPref("browser.safebrowsing.downloads.remote.enabled", false);
defaultPref("browser.safebrowsing.appRepURL", "");
defaultPref("browser.safebrowsing.gethashURL", "");
defaultPref("browser.safebrowsing.malware.reportURL", "");
defaultPref("browser.safebrowsing.reportErrorURL", "");
defaultPref("browser.safebrowsing.reportGenericURL", "");
defaultPref("browser.safebrowsing.reportMalwareErrorURL", "");
defaultPref("browser.safebrowsing.reportMalwareURL", "");
defaultPref("browser.safebrowsing.reportPhishURL", "");
defaultPref("browser.safebrowsing.reportURL", "");
defaultPref("browser.safebrowsing.updateURL", "");
defaultPref("privacy.trackingprotection.enabled", false);
defaultPref("browser.polaris.enabled", false);
defaultPref("browser.trackingprotection.gethashURL", "");
defaultPref("browser.trackingprotection.getupdateURL", "");
defaultPref("privacy.trackingprotection.pbmode.enabled", false);
defaultPref("beacon.enabled", false);

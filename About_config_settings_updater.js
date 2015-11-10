// The following file will update your about:config settings of your browser (firefox and/or pale moon) making it safer
// This file was made after reading http://web.mit.edu/~firefox/www/maintainers/autoconfig.html ,
// https://developer.mozilla.org/en-US/docs/MCD%2C_Mission_Control_Desktop_AKA_AutoConfig#AutoConfig_Directives
// and https://mike.kaply.com/2012/03/15/customizing-firefox-default-preference-files/

// still to do: the about preferences settings below, and the possible byte-shifting with offset 13 ? see
// https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Automatic_Mozilla_Configurator/Locked_config_settings
// other things ?


// ABOUT:PREFERENCES settings
// I don't know the commands for this, can someone help on this about preferences setting section?
NO --> use saved html page --> "General"->"when Firefox starts"->"Show a blank page"
NO --> save files to new folder; up_&_downloads --> "General"->"save files to:"Downloads"
"Content"->check:"Block pop-up windows"
NO --> (set to click to activate, see mail) "Content"->uncheck:"Enable JavaScript" [optional - NoScript Add-on will block it anyway]
"Content"->"Fonts & Colors"->"Advanced"->"Serif":"Liberation Sans"
"Content"->"Fonts & Colors"->"Advanced"->"Sans-serif":"Liberation Sans"
"Content"->"Fonts & Colors"->"Advanced"->uncheck:"Allow pages to choose their own fonts"
"Content"->"Languages"->choose *only*:"en-us" [remove all others, if any]
"Applications"->choose:"Always ask" for every application - if not possible:choose:"Preview in Firefox/Nightly"
"Privacy"->"Tracking"->check:"Tell websites I do not want to be tracked"
"privacy"->"History"->"Firefox will:"Use custom settings for history"
"privacy"->"History"->uncheck:"Always use private browsing mode"
NO --> remember history--> "privacy"->"History"->uncheck:"Remember my browsing and download history"
"privacy"->"History"->uncheck:"Remember search and form history"
NO --> accept cookies --> "privacy"->"History"->uncheck:"Accept cookies from sites"
NO -->"privacy"->"History"->uncheck:"Accept third-party cookies"
"privacy"->"History"->check:"Clear history when Firefox/Nightly closes"
NO, uncheck browsing and download history, and offline websites data -->"privacy"->"History"->"settings":check all -> except:"Site Preferences"
[to enable cookies for certain trusted sites: use:"Exceptions" and paste URL of site and modify settings according to your preference. 
If you additionally use Cookie-Monster (Add-on) you need to uncheck "Block all cookies" in CM-Options]
"privacy"->"location bar"->"When using the location bar, suggest:"->choose:"Nothing"
"security"->check:"Warn me when sites try to install add-ons"
"security"->check:"Block reported attack sites"
"security"->check:"Block reported web forgeries"
"security"->"Passwords"->uncheck:"Remember passwords for sites"
"security"->"Passwords"->uncheck:"Use a master password"
"advanced"->"General"->"System Defaults"->uncheck:"Submit crash reports"
"advanced"->"General"->"System Defaults"->uncheck:"Submit performance data"
NO --> Never install updates --> "advanced"->"Update"->check:"Automatically install updates"
ADDED --> "advanced"-> cached web content: check override automatic cache management; limit cache to 50MB of space 
"advanced"->"Update"->check:"Warn me if this will disable any of my add-ons"
"advanced"->"Update"->check:"Automatically update Search Engines"
"advanced"->"Encryption"->"Protocols"->check:"Use SSL 3.0"
"advanced"->"Encryption"->"Protocols"->check:"Use TLS 1.0"
"advanced"->"Encryption"->"Certificates"->"When a server requests my personal certificate"->check:"Ask me every time"

// ABOUT:CONFIG
// disable browser cache:
lockPref("browser.cache.disk_cache_ssl", false);
lockPref("browser.cache.offline.enable", false);
lockPref("browser.cache.disk.smart_size.enabled", false);
lockPref("browser.cache.disk.smart_size.first_run", false);
lockPref("browser.cache.offline.capacity:", 0);
lockPref("dom.indexedDB.enabled", false);
lockPref("dom.battery.enabled", false);

// disable history & localization:
lockPref("browser.search.suggest.enabled", false);
lockPref("browser.sessionstore.resume_from_crash", false);
lockPref("geo.enabled", false);
lockPref("browser.bookmarks.restore_default_bookmarks", false);

// misc other tweaks:
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
lockPref("network.http.sendSecureXSiteReferrer", false);
lockPref("network.http.spdy.enabled", false);
lockPref("plugins.click_to_play", true);
lockPref("security.enable_tls_session_tickets", false);
lockPref("security.ssl.enable_false_start", true);
lockPref("extensions.blocklist.enabled", false);
lockPref("webgl.disabled", true);
lockPref("network.websocket.enabled", false);

// make your browsing faster:
lockPref("network.http.pipelining", true);
lockPref("network.http.pipelining.ssl", true);
lockPref("network.http.max-persistent-connections-per-proxy", 0);
lockPref("network.http.max-persistent-connections-per-server", 10);
lockPref("network.http.max-connections-per-server", 15);
lockPref("network.http.pipelining.maxrequests", 15);
lockPref("network.http.redirection-limit", 5);
lockPref("network.dns.disableIPv6", true);
lockPref("network.http.fast-fallback-to-IPv4", false);
lockPref("dom.popup_maximum Mine", 10);
lockPref("network.prefetch-next", false);
lockPref("browser.backspace_action", 0);
lockPref("browser.sessionstore.max_tabs_undo", 5);
lockPref("browser.sessionhistory.max_entries", 5);
lockPref("browser.sessionstore.max_windows_undo", 1);
lockPref("browser.sessionstore.max_resumed_crashes", 0);
lockPref("browser.sessionhistory.max_total_viewers", 0);
lockPref("browser.tabs.animate", 0);

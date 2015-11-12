##########################################################################
#                      Internet speed increase C                         #
# made by Brian Peregrine, released under the GNU General Public License #
##########################################################################

#This script will
#Install gajim OTR plugin
#Install youtube-viewer
#Install firejail (= a sandboxing program ) and make a profile for the Pale Moon browser

#Note that the programs the script will install will be the converted debian (so slitaz) packages, not debian packages; if you have a plain debian distro, change the .tazpkg extension to .deb instead and also change "tazpkg install" by "aptitude install""

#!/bin/sh

#Install gajim OTR plugin (https://github.com/python-otr/gajim-otr)
cd ~/files_slitaz_altering_programs_script/gajim/
cp pure-python-otr-master /share/gajim/plugins/

#Convert debian packages to tazpkg packages (deactivate this by adding # before each line if you use a plain debian distro, and not a slitaz-based distro)
cd ~/files_internet_speed_increase_scripts/
tazpkg convert firejail_0.9.26_1_i386.deb

cd ~/files_internet_speed_increase_scripts/youtube-viewer_dependencies/
tazpkg convert libdata-dump-perl_1.22-1_all.deb
tazpkg convert libgtk2-perl_1.2492-4_i386.deb
tazpkg convert libwww-perl_6.08-1_all.deb
tazpkg convert gcap_0.1.1-1_all.deb
tazpkg convert libterm-readline-gnu-perl_1.24-2+b1_i386.deb
tazpkg convert liblwp-protocol-https-perl_6.06-2_all.deb
tazpkg convert libterm-readkey-perl_2.32-1+b1_i386.deb

#Install youtube-viewer (see https://github.com/trizen/youtube-viewer/issues/22)
cd ~/files_internet_speed_increase_scripts/youtube-viewer/WWW-YoutubeViewer/
./libdata-dump-perl_1.22-1_all.tazpkg
./libgtk2-perl_1.2492-4_i386.tazpkg
./libwww-perl_6.08-1_all.tazpkg
./gcap_0.1.1-1_all.tazpkg
./libterm-readline-gnu-perl_1.24-2+b1_i386.tazpkg
./liblwp-protocol-https-perl_6.06-2_all.tazpkg
./libterm-readkey-perl_2.32-1+b1_i386.tazpkg
sudo cpan -i XML::Fast
./Build.PL
./Build
./Build test
./Build install --install_path script=/usr/bin

cd ~/files_internet_speed_increase_scripts/youtube-viewer_dependencies/
tazpkg install libdata-dump-perl_1.22-1_all.tazpkg
tazpkg install libgtk2-perl_1.2492-4_i386.tazpkg
tazpkg install libwww-perl_6.08-1_all.tazpkg
tazpkg install gcap_0.1.1-1_all.tazpkg
tazpkg install libterm-readline-gnu-perl_1.24-2+b1_i386.tazpkg
tazpkg install liblwp-protocol-https-perl_6.06-2_all.tazpkg
tazpkg install libterm-readkey-perl_2.32-1+b1_i386.tazpkg

#Install firejail, and copy all ready made profiles for other programs -besides Firefox, as a profile is all ready standardly included for this- (see https://l3net.wordpress.com/2014/09/19/firejail-a-security-sandbox-for-mozilla-firefox/ and https://l3net.wordpress.com/2015/02/19/firejail-a-security-sandbox-for-mozilla-firefox-part-2/ and https://l3net.wordpress.com/projects/firejail/building-custom-profiles/ )
cd ~/files_internet_speed_increase_scripts/
./firejail_0.9.26_1_i386.tazpkg
./configure
make
make install
cd ~/files_internet_speed_increase_scripts/firejailprofiles/
cp *.profile /etc/firejail/

#Make a profile for pale moon (renamed copy of firefox profile)
cd ~/files_internet_speed_increase_scripts/firejailprofiles/
cp firefox.profile /etc/firejail/palemoon.profile

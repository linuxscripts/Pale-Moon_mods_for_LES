# Firejail profile for Pale Moon
include /etc/firejail/disable-mgmt.inc
include /etc/firejail/disable-secret.inc
blacklist ${HOME}/.adobe
blacklist ${HOME}/.macromedia
caps
seccomp
netfilter

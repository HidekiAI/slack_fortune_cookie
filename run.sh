#!/bin/bash
set -o nounset
source ./env.conf.sh
set +o nounset

# NOTE: 'motd.txt' is currently hard-coded to index.js source code
#_MOTD=./motd.txt

if [ x"$_FORTUNE" == x"" ] ; then 
	if [ -e /usr/games/fortune ] ; then
		_FORTUNE=/usr/games/fortune
	fi
			#| /usr/games/cowsay > motd.txt
fi
if [ x"$_COWSAY" == x"" ] ; then 
	if [ -e /usr/games/cowsay ] ; then
		_COWSAY=/usr/games/cowsay
	fi
fi

if [ -e $_FORTUNE ] ; then
	if [ -e $_COWSAY ] ; then
		$_FORTUNE | $_COWSAY > ${_DIR}/motd.txt
	else
		$_FORTUNE > ${_DIR}/motd.txt
	fi
else
	echo 'Please install "fortune"' > ${_DIR}/motd.txt
fi

node $_SRC

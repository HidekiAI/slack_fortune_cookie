#!/bin/bash
_PID=$$
_DATETIME=$(date +%Y%m%d:%H%M)
set -o nounset
source ./env.conf.sh
set +o nounset

if ! [ -e $_PIDFILE ] ; then
	# record time first, since PID may probably no longer exist
	echo $_DATETIME > $_PIDFILE
	echo $_PID >> $_PIDFILE
else
	# already running, check pid and when was the last time ran
	_T=$(head -n 1 $_PIDFILE)
	_P=$(tail -n 1 $_PIDFILE)	
	if [ $_T == $_DATETIME ] ; then
		# in same day, hour, and minute (ignores seconds)
		exit -1
	fi
	if [ $_P == $_PID ] ; then
		# same pid, why?
		exit -1
	fi

	# could be same day and hour, but minutes differ (at the worst case, 61 seconds past)
	echo $_DATETIME > $_PIDFILE
	echo $_PID >> $_PIDFILE
fi

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

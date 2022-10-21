#!/bin/sh

#if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
#then
#	export NVM_DIR="$HOME/.nvm"
#	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#	[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


/usr/local/bin/pm2 delete 0;
cd /home/elice/back && /usr/bin/yarn pm2;

#fi

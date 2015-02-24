#!/bin/bash
sudo stop webgme

sudo cp webgme.conf /etc/init/webgme.conf

branch="master"
if [ -n "$1" ]; then
  branch="$1"  
fi
echo "$branch"

commit_hash="$(git ls-remote git://github.com/webgme/webgme.git refs/heads/$branch | cut -f 1)"
echo "$commit_hash"

npm install https://github.com/webgme/webgme/tarball/$commit_hash

CONFIG_FILE=config.js
if [ -f config_local.js ]; then
    CONFIG_FILE=config_local.js
fi
cp $CONFIG_FILE node_modules/webgme/src/bin/config.js
sudo start webgme

logfile=`basename $0`.log
echo "$logfile"
npm list webgme --long true > $logfile
echo "branch $branch" >> $logfile
echo "commit $commit_hash" >> $logfile
 
echo "branch link https://github.com/webgme/webgme/tree/$branch" >> $logfile
echo "commit link https://github.com/webgme/webgme/tree/$commit_hash" >> $logfile

datetime="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo "installed on $datetime" >> $logfile

#!/usr/bin/env bash

#if any command inside script returns error, exit and return that error
set -e

# magic line to ensure that we're always inside the root of our application,
# no matter from which directory we;ll run script
# thanks to it we can just enter our run script command
cd "{$0%/*}/.."

# let's fake failing test for now
echo "RUnning tests"
echo "................"
echo "Failed!: && exit 1



#!/bin/bash

# Extract the branch name
BRANCH_NAME=$(git branch | grep '*' | sed 's/* //')

# Extract the prefix up to the first underscore
# PREFIX=$(echo "$BRANCH_NAME" | cut -d'_' -f1)

# Check if the branch name contains an underscore
if [ "$(echo "$BRANCH_NAME" | grep -c '_')" -gt 0 ]; then
  # Prepend the branch name as a prefix to the commit message
  sed -i.bak -e "1s/^/\[$PREFIX\]: /" "$1"
fi

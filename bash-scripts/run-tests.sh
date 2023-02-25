#!/bin/bash

set -e;

virmator test-web;

if [ -d ../resizable-image-element-test-bed ]; then
  cd ../resizable-image-element-test-bed;
  npm test;
  sleep 1;
  hasChanges="$(git diff --name-only)";
  if [[ -n "${hasChanges// }" ]]; then
    echo "resizable-image-element-test-bed has changes"
    exit 1;
  fi
fi
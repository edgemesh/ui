#!/bin/bash
npm run clean
npm run build
npm run release
git push --follow-tags origin master
npm publish
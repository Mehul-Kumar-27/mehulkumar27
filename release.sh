#!/bin/bash

# Exit on error
set -e

# Build the app
npm run build

# Go to build directory
cd build

# Initialize a new Git repo inside build
git init
git remote add origin https://github.com/Mehul-Kumar-27/mehulkumar27.git
git checkout -b release

# Add all files and commit
git add .
git commit -m "Deploy build to release branch"

# Force push to release branch
git push origin release --force

# Cleanup
cd ..
rm -rf build/.git

echo "🚀 Successfully deployed to release branch!"

#!/bin/bash

# Deployment script for AWS Amplify with pnpm

echo "🚀 Starting deployment..."

# Check Node.js version
echo "📋 Node.js version:"
node --version

# Install pnpm if not available
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

# Check pnpm version
echo "📋 pnpm version:"
pnpm --version

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build the application
echo "🔨 Building application..."
pnpm run build

echo "✅ Deployment preparation complete!" 
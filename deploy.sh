#!/bin/bash

# Deployment script for AWS Amplify with pnpm

echo "🚀 Starting deployment..."

# Set memory optimization
export NODE_OPTIONS="--max-old-space-size=4096"

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

# Install dependencies with memory optimization
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile --prefer-offline --no-optional

# Build the application with memory optimization
echo "🔨 Building application..."
pnpm run build

echo "✅ Deployment preparation complete!" 
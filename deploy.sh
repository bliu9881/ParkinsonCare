#!/bin/bash

# Deployment script for AWS Amplify with pnpm

echo "🚀 Starting deployment..."

# Install pnpm if not available
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build the application
echo "🔨 Building application..."
pnpm run build

echo "✅ Deployment preparation complete!" 
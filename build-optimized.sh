#!/bin/bash

# Optimized build script for memory-constrained environments

echo "🚀 Starting optimized build..."

# Set memory optimization
export NODE_OPTIONS="--max-old-space-size=4096"
export NEXT_TELEMETRY_DISABLED=1
export GENERATE_SOURCEMAP=false

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next
rm -rf out

# Install dependencies with optimization
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile --prefer-offline --no-optional

# Build with memory optimization
echo "🔨 Building application..."
pnpm run build

echo "✅ Optimized build complete!" 
#!/bin/bash
# Test script for Book Club API - Cross-device sync verification

echo "=== Book Club API Test ==="
echo ""

API_URL="https://5-189-142-233.nip.io/api"

echo "1. Testing GET /api/users (basic user list)"
curl -s "$API_URL/users" | jq '.[] | {name, discord_id, chapters_completed}'
echo ""

echo "2. Testing GET /api/user/acro16hunna (Alex detailed progress)"
curl -s "$API_URL/user/acro16hunna" | jq '{name, discord_id, chapters_completed, progress_count: (.progress | length)}'
echo ""

echo "3. Testing GET /api/user/Dhianna369 (Dhianna detailed progress)"
curl -s "$API_URL/user/Dhianna369" | jq '{name, discord_id, chapters_completed, progress_count: (.progress | length)}'
echo ""

echo "4. Testing GET /api/books"
curl -s "$API_URL/books" | jq '.[] | {title, author, chapter_count: (.chapters | length)}'
echo ""

echo "=== API Test Complete ==="

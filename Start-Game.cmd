@echo off
cd /d "%~dp0"
call pnpm install --frozen-lockfile || exit /b 1
call pnpm build || exit /b 1
echo http://127.0.0.1:3012/
call pnpm start --hostname 127.0.0.1 --port 3012

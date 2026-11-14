$p = Start-Process python -ArgumentList "-m http.server 3033 --directory C:\Users\vinit\Projects\mkl-45\public" -PassThru
Start-Sleep -Seconds 3
try {
  Set-Location "C:\Users\vinit\Projects\test-mkl-vite"
  npx shadcn@latest add "http://127.0.0.1:3033/r/button.json" --yes --overwrite
} finally {
  Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
}

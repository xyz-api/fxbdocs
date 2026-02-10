@echo off
start "" msedge --inprivate http://localhost:8085
python -m http.server 8085

# Eenmalig: koppel GitHub en push (jij voert je repo-URL in).
# Voorbeeld: .\scripts\push-naar-github.ps1 "https://github.com/JOUWUSER/ongediertecheck.git"

param(
    [Parameter(Mandatory = $true, HelpMessage = "HTTPS clone-URL van je lege GitHub-repo")]
    [string]$GithubRepoUrl
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if (-not (Test-Path .git)) {
    Write-Error "Geen .git map hier. Run dit script vanuit de projectmap."
}

git remote remove origin 2>$null
git remote add origin $GithubRepoUrl
git branch -M main
Write-Host "Pushen naar origin main..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nKlaar. Ga in Vercel naar het project → Settings → Git → Production Branch = main, Root Directory leeg." -ForegroundColor Green
} else {
    Write-Host "`nPush mislukt. Log in bij GitHub (browser of Personal Access Token) en probeer opnieuw." -ForegroundColor Yellow
}

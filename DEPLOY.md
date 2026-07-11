# Deploying Your Course Repo

This repo auto-deploys with GitHub Pages. The workflow tries to enable Pages for
GitHub Actions automatically before deploying.

## One-time setup

The workflow should handle this automatically. If GitHub blocks automatic Pages
setup in your copy, enable it manually once:

1. Go to **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save.

After that, every push to `main` or `master` runs `.github/workflows/deploy.yml`.

## Deploy after you make changes

Commit and push:

```bash
git add .
git commit -m "Update my assignment"
git push
```

Then open your repo on GitHub and go to **Actions -> Deploy to GitHub Pages**. When the run finishes, GitHub shows the Pages URL. It usually looks like:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Where assignment pages appear

Individual activities:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/week1/7_13/code_deliverable/
```

Group projects:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/projects/project1/code_deliverable/
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/projects/project2/code_deliverable/
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/projects/final/code_deliverable/
```

## What the auto-deploy does

The workflow:

- copies the repo into `_site/`;
- builds every `code_deliverable/` folder that has a `package.json` with a `build` script;
- supports common static outputs: `dist/`, `build/`, and `out/`;
- leaves plain HTML/CSS/JS folders alone;
- removes the course custom domain from student copies so student repos deploy to their own GitHub Pages URL.

## Test the deploy build before pushing

From the repo root:

```bash
npm run build:pages
```

Preview the result:

```bash
npx --yes http-server _site -p 8001 -c-1
```

Open:

```text
http://localhost:8001
```

## If the deploy fails

Check these first:

- Pages source is set to **GitHub Actions**.
- Your app's `package.json` has a working `build` script if it needs a build step.
- Static apps have an `index.html` inside their `code_deliverable/` folder.
- The failed workflow log shows which folder was being processed.

If you used Next.js, configure it for static export so `npm run build` creates an `out/` folder, or deploy the app on Vercel and put the Vercel link in your report.

## Canvas Submission

Deployment is only one part of submission. For individual activities, Canvas still needs the assignment-folder zip and the deployed link. See [SUBMISSION.md](SUBMISSION.md).

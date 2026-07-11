# Start Here: Run This Course Repo Locally

This page is for students who want the full course repo running on their own computer.

## 1. Get the repo onto your computer

Use the GitHub Classroom link from the first activity to make your own copy. Then clone it:

```bash
git clone YOUR_REPO_URL
cd class
```

If you use GitHub Desktop, choose **File -> Clone repository**, then open the cloned folder in VS Code.

## 2. Install the optional test tools

The course pages themselves are plain files, so they can run without installing anything. Install the Node tools if you want the `npm` commands and tests:

```bash
npm install
```

## 3. Start the local course site

From the repo root:

```bash
npm run dev
```

Then open:

```text
http://localhost:8000
```

The same command is also available as:

```bash
npm start
```

To open the browser automatically on a Mac:

```bash
npm run open
```

## 4. Find your work

Activities live in dated folders:

```text
week1/7_13/
week1/7_14/
week1/7_15/
week2/7_20/
...
```

Each assignment has:

```text
code_deliverable/    # build your app here
log_deliverable/     # history.md prompt log
vibe-report.md       # reflection/report
```

Open the local site, click an activity, and then edit that activity's `code_deliverable/` folder.

## 5. Preview one app directly

Most simple HTML/CSS/JS apps can be opened through the local site at a URL like:

```text
http://localhost:8000/week1/7_13/code_deliverable/
```

Group project apps use:

```text
http://localhost:8000/projects/project1/code_deliverable/
http://localhost:8000/projects/project2/code_deliverable/
http://localhost:8000/projects/final/code_deliverable/
```

If you build a framework app inside a `code_deliverable/` folder, use that app's own commands from inside the folder, usually:

```bash
npm install
npm run dev
```

## 6. Check the deploy artifact locally

This step is **optional** — pushing to GitHub already builds and deploys your site. It
also needs a `bash` shell: on macOS/Linux it just works; on **Windows use Git Bash**
(installed with Git) rather than PowerShell.

The GitHub Pages workflow uses the same build command:

```bash
npm run build:pages
```

That creates `_site/`, the folder GitHub Pages deploys. You can preview it with:

```bash
npx --yes http-server _site -p 8001 -c-1
```

Then open:

```text
http://localhost:8001
```

## 7. Publish your hosted version

See [DEPLOY.md](DEPLOY.md) for GitHub Pages setup and troubleshooting.

## 8. Submit on Canvas

See [SUBMISSION.md](SUBMISSION.md) for exactly what to upload: a zip of the assignment folder plus your deployed link.

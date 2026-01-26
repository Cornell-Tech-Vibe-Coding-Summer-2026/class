# Student Submissions - GitHub Pages Setup

This directory is configured to automatically deploy to GitHub Pages with a landing page that links to all student homework submissions.

## Directory Structure

```
class/
├── index.html                          # Main landing page
├── .github/workflows/deploy.yml        # GitHub Actions deployment
├── week1/
│   ├── 7_13/code_deliverable/
│   ├── 7_14/code_deliverable/
│   └── 7_15_16/code_deliverable/
├── week2/
│   ├── 7_20/code_deliverable/
│   ├── 7_21/code_deliverable/
│   └── 7_22_23/code_deliverable/
└── week3/
    ├── 7_27/code_deliverable/
    └── 7_28_30/code_deliverable/
```

## How It Works

### Landing Page
The root `index.html` displays a directory of all student submissions organized by week. Each submission links to its `code_deliverable` folder.

### Supported Site Types

#### Static HTML/CSS/JS
Place your HTML files directly in the `code_deliverable` folder:
```
week1/7_13/code_deliverable/
├── index.html
├── style.css
└── script.js
```

#### React Apps
If your submission is a React app with a `package.json`:
```
week1/7_13/code_deliverable/
├── package.json
├── src/
└── public/
```

The GitHub Actions workflow will automatically build it and serve the build output.

## GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages
   - Select "Deploy from a branch"
   - Select `gh-pages` branch
   - Select `/ (root)` directory

2. **Configure Secrets (if needed)**
   - The workflow uses the default `GITHUB_TOKEN` which is automatically provided

## Deployment

The site automatically deploys when you push to `main` or `master` branch.

### Your GitHub Pages URL will be:
```
https://username.github.io/repo-name/
```

The landing page will be at the root, and submissions will be accessible at:
```
https://username.github.io/repo-name/week1/7_13/code_deliverable/
```

## Important Notes

- The workflow publishes the entire repository to GitHub Pages
- For React apps with subfolders in package.json (like `"homepage": "/repo-name/week1/7_13/code_deliverable/"`), ensure they're properly configured
- Static HTML sites don't need any special configuration
- Each submission can be a completely independent project

## Testing Locally

To test the landing page locally, open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000`

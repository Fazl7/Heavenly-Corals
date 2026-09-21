# Vercel Deployment Playbook

This is a Next.js 16 application using pnpm.

## 1. Clean the local install

From the project directory:

```powershell
cd "C:\Users\fazal\Downloads\build-lakshadweep-b2b"
Remove-Item -Recurse -Force node_modules, .next -ErrorAction SilentlyContinue
```

Do not commit `node_modules` or `.next`. They are already covered by `.gitignore`.

## 2. Keep one package manager

This project declares pnpm in `package.json` and has `pnpm-lock.yaml`. Use pnpm for local installs and Vercel.

If `package-lock.json` was created accidentally and you are committing the project as a pnpm project, remove it before pushing:

```powershell
Remove-Item package-lock.json -ErrorAction SilentlyContinue
```

Do not delete `pnpm-lock.yaml`.

Install and verify locally:

```powershell
corepack enable
corepack prepare pnpm@12.3.4 --activate
pnpm install --frozen-lockfile
pnpm build
```

If the pnpm shim is broken on Windows, use the local Next binary only as a temporary workaround:

```powershell
.\node_modules\.bin\next.cmd build
```

## 3. Push the project to GitHub

Create a new empty GitHub repository. Do not add a README, `.gitignore`, or license if this folder will be pushed as-is.

From the project directory, use a repository-local Git setup. The current machine may have a Git repository above this folder, so verify the root before committing:

```powershell
git rev-parse --show-toplevel
```

If the result is not this project folder and this project does not already contain a `.git` directory, initialize this project as its own repository:

```powershell
git init
git branch -M main
git add .
git commit -m "Prepare Lakshadweep B2B site for deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Before `git add .`, confirm that `node_modules`, `.next`, and `.env*.local` are not listed:

```powershell
git status --short
```

If this folder already has its own `.git` directory, do not run the `Remove-Item .git` command. Add the remote and push normally:

```powershell
git add .
git commit -m "Prepare Lakshadweep B2B site for deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## 4. Import into Vercel

1. Open [vercel.com/new](https://vercel.com/new).
2. Sign in with GitHub.
3. Select the repository.
4. Confirm **Framework Preset** is `Next.js`.
5. Leave **Root Directory** as `./`.
6. Leave the build command as the detected default, or use `pnpm build`.
7. Leave the output directory blank. Next.js manages it automatically.
8. Click **Deploy**.

Vercel should detect `pnpm-lock.yaml` and install with pnpm. No `node_modules` upload is needed.

## 5. Add environment variables

This site currently does not require a secret environment variable based on the checked-in code. If one is added later:

- Add it in Vercel under **Project Settings > Environment Variables**.
- Add it for the required environments: Production, Preview, or Development.
- Never commit `.env.local` or any secret value to GitHub.
- Redeploy after changing a variable.

## 6. Verify the deployment

After deployment, check:

- The homepage loads.
- Images load, including the leadership portraits in `public/images`.
- Navigation anchors work.
- The contact section renders correctly.
- The Vercel deployment has no build errors or image warnings.

To test a production build locally before pushing:

```powershell
pnpm build
pnpm start
```

## Troubleshooting

### `pnpm` is not recognized or its shim is broken

Install or repair pnpm, then retry:

```powershell
corepack enable
corepack prepare pnpm@12.3.4 --activate
pnpm --version
```

Alternatively, install pnpm globally with npm:

```powershell
npm install --global pnpm@12.3.4
```

### Vercel uses the wrong install command

In Vercel, open **Project Settings > Build and Deployment** and set the install command to:

```text
pnpm install --frozen-lockfile
```

Set the build command to:

```text
pnpm build
```

Then redeploy.

### A deployment still shows old code

Push a new commit and check that Vercel built the latest commit from the expected branch. Use **Redeploy** from the deployment menu if needed.

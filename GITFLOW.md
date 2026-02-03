# Git Flow Configuration for Boilr

## Branches

### Main Branches
- **`main`**: Production-ready code. Always deployable.
- **`develop`**: Integration branch for features. Next release preparation.

### Supporting Branches
- **`feature/*`**: New features (e.g., `feature/stripe-integration`)
- **`hotfix/*`**: Critical production fixes (e.g., `hotfix/fix-icon-imports`)
- **`release/*`**: Release preparation (e.g., `release/v1.0.0`)

---

## Workflow

### Starting a New Feature
```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Work on your feature
git add .
git commit -m "feat: add your feature description"

# Push to remote
git push -u origin feature/your-feature-name

# Create Pull Request to develop
```

### Finishing a Feature
```bash
# Merge to develop via Pull Request
# After PR approval and merge, delete feature branch
git checkout develop
git pull origin develop
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

### Creating a Release
```bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Update version in package.json
npm version 1.0.0 --no-git-tag-version

# Commit version bump
git add package.json package-lock.json
git commit -m "chore: bump version to 1.0.0"

# Merge to main
git checkout main
git merge --no-ff release/v1.0.0

# Tag the release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# Delete release branch
git branch -d release/v1.0.0
```

### Hotfix
```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/fix-description

# Fix the issue
git add .
git commit -m "fix: description of the fix"

# Merge to main
git checkout main
git merge --no-ff hotfix/fix-description
git tag -a v1.0.1 -m "Hotfix version 1.0.1"
git push origin main --tags

# Merge to develop
git checkout develop
git merge --no-ff hotfix/fix-description
git push origin develop

# Delete hotfix branch
git branch -d hotfix/fix-description
```

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples:
```bash
git commit -m "feat(generator): add MongoDB template support"
git commit -m "fix(ui): restore missing icon imports"
git commit -m "docs: update deployment guide"
git commit -m "chore: bump dependencies"
```

---

## Automated Workflows

### CI/CD Pipeline
- **On Push to `main` or `develop`**: Run lint, build, deploy
- **On Pull Request**: Run tests, create preview deployment
- **On Tag `v*.*.*`**: Create GitHub release with changelog

### Vercel Integration
- **`main` branch**: Auto-deploy to production
- **`develop` branch**: Auto-deploy to staging (if configured)
- **Pull Requests**: Auto-deploy to preview URLs

---

## Version Numbering

Follow [Semantic Versioning](https://semver.org/):

**MAJOR.MINOR.PATCH** (e.g., `1.2.3`)

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

---

## Quick Commands

```bash
# Setup develop branch (first time)
git checkout -b develop
git push -u origin develop

# Start new feature
git checkout develop && git pull && git checkout -b feature/my-feature

# Hotfix
git checkout main && git pull && git checkout -b hotfix/urgent-fix

# Create release
git checkout develop && git pull && git checkout -b release/v1.1.0
```

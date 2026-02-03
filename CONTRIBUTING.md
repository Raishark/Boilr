# Contributing to Boilr

First off, thank you for considering contributing to Boilr! It's people like you that make Boilr such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include your environment details** (OS, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other tools**

### Pull Requests

We follow the [Git Flow](GITFLOW.md) workflow. Please follow these steps:

1. **Fork the repository** and create your branch from `develop`
2. **Follow the naming convention**: `feature/your-feature-name`, `fix/bug-description`, or `hotfix/urgent-fix`
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Update documentation** if needed
6. **Follow commit message conventions** (see below)
7. **Create a Pull Request** to the `develop` branch

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/boilr.git
cd boilr

# Install dependencies
npm install

# Create a feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Start development server
npm run dev
```

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Maintain strict type safety
- Avoid using `any` type unless absolutely necessary
- Export interfaces and types when they might be reused

### React/Next.js
- Use functional components with hooks
- Follow React best practices
- Use Server Components when possible (Next.js 15)
- Keep components focused and reusable

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system (colors, spacing, etc.)
- Ensure responsive design (mobile-first approach)
- Test on multiple screen sizes

### Code Quality
- Run `npm run lint` before committing
- Fix all linting errors and warnings
- Write clean, readable code with meaningful variable names
- Add comments for complex logic

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, build config, etc.)

### Examples
```bash
feat(generator): add Vue.js template support
fix(ui): correct responsive layout on mobile
docs: update installation instructions
chore: bump dependencies to latest versions
```

## Git Flow Workflow

Please read our [GITFLOW.md](GITFLOW.md) for detailed information about our branching strategy.

### Quick Reference
- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/***: New features (branch from `develop`)
- **hotfix/***: Critical production fixes (branch from `main`)
- **release/***: Release preparation (branch from `develop`)

## Testing

Before submitting a PR:

```bash
# Lint your code
npm run lint

# Build the project
npm run build

# Test in production mode
npm run start
```

## Documentation

- Update the README.md if you change functionality
- Update CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/) format
- Add JSDoc comments for complex functions
- Update type definitions if you modify interfaces

## Questions?

Feel free to open an issue with the `question` label, or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

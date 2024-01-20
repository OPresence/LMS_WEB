# Git Hooks Documentation

This repository uses Git hooks to automate checks and enforce coding standards. Git hooks are scripts that run automatically at different stages of the Git workflow.

## 1. Pre-Commit Hook

### Purpose

The pre-commit hook runs before each commit and performs checks to ensure code quality and adherence to standards.

### Actions

- Lint the code to enforce coding standards.
- Run tests to catch potential issues.
- Validate commit messages for a specified format.

### Installation

No additional setup is required. The hook runs automatically before each commit.

## 2. Commit-Msg Hook

### Purpose

The commit-msg hook enforces a specific format for commit messages, ensuring clarity and consistency.

### Actions

- Validate commit messages to start with a Jira is

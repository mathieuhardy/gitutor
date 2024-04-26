# Tutorial

- [1. Setup](#setup)
- [2. Basics](#basics)
	- [2.1. Branches](#basics-branches)
	- [2.2. Status](#basics-status)
	- [2.3. Diff](#basics-diff)
	- [2.4. Rm](#basics-rm)
	- [2.5. Clean](#basics-clean)
	- [2.6. Reset](#basics-reset)
	- [2.7. Commit](#basics-commit)
	- [2.8. Push](#basics-push)
	- [2.9. Log](#basics-log)
	- [2.10. Status](#basics-checkout)
	- [2.11. Fetch/pull](#basics-fetch)
	- [2.12. Rebase/merge](#basics-rebase)
    - [2.13. Cherry-pick](#basics-pick)
    - [2.14. Conflicts](#basics-conflicts)
- [3. Advanced](#advanced)
	- [3.1. Blame](#advanced-blame)
	- [3.2. Stash](#advanced-stash)
	- [3.3. Revert](#advanced-revert)
	- [3.4. Amend](#advanced-amend)
	- [3.5. Interactive rebase](#advanced-irebase)
	- [3.6. Fixup](#advanced-fixup)
	- [3.7. Tag](#advanced-tag)
	- [3.8. Config](#advanced-config)
	- [3.9. Gitignore](#advanced-gitignore)
	- [3.10. Submodules](#advanced-submodules)
	- [3.11. Subtree](#advanced-subtree)
	- [3.12. Reflog](#advanced-reflog)

## <a name="setup"></a>Setup

Re-initialize the whole repository by calling the script:

```shell
$ ./scripts/reset
```

Then you can start a tutorial:

```shell
$ ./scripts/start Basic
$ ./scripts/start Advanced
```

## <a name="basics"></a>Basics

### <a name="basics-branches"></a>Branches

Command that allows to manipulate branches: list, create, delete, ...

```shell
# Locale branches
$ git branch

# Locale and remote branches
$ git branch -a

# Create
$ git branch foo

# Create and switch
$ git checkout -b foo

# Rename
$ git branch -m foot

# Switch
$ git checkout/switch tutorial

# Delete (with force example)
$ git branch -d foot
$ git branch -D foot
```

### <a name="basics-status"></a>Status

Gets the status of your repository: files changed, added, removed, ...

```shell
# Get status
$ git status

# Short version
$ git status -s
```

### <a name="basics-diff"></a>Diff

Show changes between references.

```shell
# Current changes
$ git diff

# With external viewer
$ git difftool -y -t p4merge

# Diff between commits/branches/tags
$ git diff <from>..<to>
```

### <a name="basics-rm"></a>Rm

Remove a file from filesystem and Git index.

```shell
$ git rm <file>
```

### <a name="basics-clean"></a>Clean

Remove untracked files or directories.

```shell
# -f for files, and -d for directories
$ git clean -fd
```

### <a name="basics-reset"></a>Reset

Reset all modifications or revert a commit.

```shell
# Hard reset everything
$ git reset --hard

# Specify the reference
$ git reset --hard <sha1>

# Undo a commit
$ git reset --soft HEAD~1
```

### <a name="basics-commit"></a>Commit

Create a commit from modifications.

```shell
# With EDITOR
$ git commit <file1> <file2>

# All files modiifed
$ git commit -a

# With commit message
$ git commit -a -m "wip: bla bla"
```

### <a name="basics-push"></a>Push

Pushes something, somewhere.

```shell
# Push all new commits
$ git push

# Push force (in case of amending for example)
$ git push --force

# Be nice
$ git push --force-with-lease

# Push new branch
$ git remote -v
$ git branch -vv
$ git push -u origin <branch>
```

### <a name="basics-log"></a>Log

Show history.

```shell
# Basic
$ git log

# Short version
$ git log --oneline --decorate -20

# Full version
$ git log --pretty=format:'%C(yellow)[%H]%Creset %C(green)[%ai] %C(blue)[%an]%Creset - %s' --abbrev-commit -20
```

### <a name="basics-checkout"></a>Checkout

Switch branch or restore working tree.

```shell
# Reset file(s) state
$ git checkout src/chaos.js

# Reset all
$ git checkout .

# For deleted file(s)
$ git checkout HEAD LICENSE

# For reference
$ git checkout <branch>
$ git checkout <sha1>
```

### <a name="basics-fetch"></a>Fetch/pull

Fetches information from upstream.

```shell
# Fetch without updating current branch's HEAD
$ git fetch

# Update current branch's HEAD
$ git pull

# With tags
$ git pull --tags

# Cleaning
$ git pull --prune
```

### <a name="basics-rebase"></a>Rebase/merge

Rebase or merge branches

```shell
# Rebase current branch onto another one.
$ git rebase <branch>

# Merge from another branch
$ git merge <branch>
```

### <a name="basics-pick"></a>Cherry-pick

Pick a commit and add it to the current branch.

```shell
$ git cherry-pick <sha1>
```

### <a name="basics-conflicts"></a>Conflicts

Resolve conflicts when merging/rebasing a branch for example.

```shell
$ git mergetool -t meld
```

## <a name="advanced"></a>Advanced

### <a name="advanced-blame"></a>Blame

Find the last modifiers of a file.

```shell
$ git blame <file>

# Choose lines
$ git blame <file> -L <from>,<to>
```

### <a name="advanced-stash"></a>Stash

Backup and restore changes.

```shell
# Push
$ git stash push

# With message
$ git stash push -m "bla"

# List entries
$ git stash list

# Restore
$ git stash pop/apply

# Clear
$ git stash clear
```

### <a name="advanced-revert"></a>Revert

Revert an entire commit.

```shell
$ git revert <sha1>
```

### <a name="advanced-amend"></a>Amend

Edit the last commit.

```shell
$ git commit --amend <file>

# All modifications at once
$ git commit --amend -a
```

### <a name="advanced-irebase"></a>Interactive rebase

Interactive rebase some commmits.

```shell
$ git rebase -i <sha1>
```

### <a name="advanced-fixup"></a>Fixup

Fixup a previous commit.

```shell
# Create a fixup commit
$ git commit -a --fixup <sha1>

# Autosquash rebase
$ git rebase -i --autosquash <sha1>
```

### <a name="advanced-tag"></a>Tag

Manage named references (tags).

```shell
# Create a tag
$ git tag 1.0.0

# List tags
$ git tag --list

# Push tags
$ git push --tags

# Delete
$ git tag -d 1.0.0
$ git push -d origin 1.0.0
```

### <a name="advanced-config"></a>Config

Handles configuration of Git (local and global).

```shell
# Local configuration (.git/config)
$ git config user.email

# Global configuration (~/.gitconfig)
$ git config --global user.email

# Configure editor
$ git config core.editor "code --wait"

# Configure merge tool
$ git config merge.tool meld

# Alias
$ git config alias.ci commit
$ git config alias.amend "ci --amend"
```

### <a name="advanced-gitignore"></a>Gitignore

Ignore some files from tracked files.

```shell
$ vim .gitignore
```

### <a name="advanced-submodules"></a>Submodules

List of external submodules.

```shell
# Add a submodule
$ git submodule add git@github.com:climateseed/cs-core-backend-rs.git thirdparties/cs-core

# Init/update
$ git submodule update --init

# List
$ git submodules
```

### <a name="advanced-subtree"></a>Subtree

List of external subtrees.

**Pros:**

- Code is available after the clone
- No metadata file added

**Cons:**

- Huge commands
- Cannot get list of subtrees

```shell
# Add a subtree
$ git subtree add --prefix trees/cs-core git@github.com:climateseed/cs-core-backend-rs.git master

# Pull changes
$ git subtree pull --prefix trees/cs-core git@github.com:climateseed/cs-core-backend-rs.git master

# With remote
$ git remote add -f cs-core git@github.com:climateseed/cs-core-backend-rs.git
$ git subtree pull --prefix trees/cs-core cs-core master

# Push modifications
$ git subtree push --prefix trees/cs-core cs-core master
```

### <a name="advanced-reflog"></a>Reflog

Emergency recovery. Find a lost change.

```shell
$ git reflog
```

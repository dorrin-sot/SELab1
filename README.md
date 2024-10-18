# SELab1

Our static website is a very simple note-taking website that allows users to write and delete notes which are saved in the localstorage of the browser and loaded afterwards from there.

| Full Name    | Student ID |
| :-------- | :-------: |
| Dorrin Sotoudeh  | 98170851    |
| Elahe Mortazavian | 98171137     |
| Fateme Fotouhi    | 98170968    |

# Implementation Details

- Creating a .gitignore file: Since all three of us used VSCode for development, we created a .gitignore file and only added the `.DS_Store` file to it which contain the configurations of VSCode.
- Branches: We had one main branch which contained our proper code. One branch (hotfix) was used to quickly patch up bugs and for every feature there was a seperate `feature-*` branch. The main branch was protected by a ruleset which prevented any direct push to it and instead needed a pull request to be merged into. Each pull request also needed an approval from another contributor with write access. Another general branch we had was `styling` which contained general commits related to styling.
  - <img width="690" alt="Screenshot 1403-07-27 at 18 43 12" src="https://github.com/user-attachments/assets/24d85a61-7641-44b7-85c3-93f7edb3f2fc">
  - <img width="620" alt="Screenshot 1403-07-27 at 18 43 33" src="https://github.com/user-attachments/assets/cd8b2b9c-343f-42bf-ac10-89abaca08639">
  
- There is also a Github Pages workflow that automatically deploys our the contents of the `main` branch onto github.io. The address of the Deployment is [https://dorrin-sot.github.io/SELab1](https://dorrin-sot.github.io/SELab1).
  - <img width="620" alt="Screenshot 1403-07-27 at 18 43 52" src="https://github.com/user-attachments/assets/489e69aa-2ff5-4ac8-8237-dd7c08766a9d">

- We also encountered 2 Merge conflicts during development (images provided below). the first conflict was artificially induced by us while merging pushing conflicting code to the `styling` branch. The second one happened while trying to merge the `hotfix` branch with `main`.
  - <img width="410" alt="Screenshot 1403-07-27 at 17 13 08" src="https://github.com/user-attachments/assets/32645e02-0609-481a-8f0e-1c2d1c0c5963">
  - <img width="886" alt="Screenshot 1403-07-27 at 17 33 00" src="https://github.com/user-attachments/assets/2752041e-07cc-40ad-984e-78fbb9120c98">


# Questions

1. **What is the `.git` folder? What information is stored in it? How is it created?**

The `.git` folder is a hidden directory located at the root of a Git repository. It stores all the information about the repository, including configurations, the entire history of changes, and metadata such as branches, tags, and commits. It is created by running the `git init` command, which initializes a new Git repository in the current directory.

2. **What does atomic mean in atomic commit and atomic pull-request?**

Atomic in this context refers to the concept of indivisibility. An atomic commit or atomic pull-request means that the entire operation either completes fully or not at all. In the case of a commit, it ensures that all changes are applied together, preventing a situation where some changes are applied while others are not. For pull requests, it ensures that the entire feature or fix is merged at once, without partial changes.

3. **What are the differences between `fetch`, `pull`, `merge`, `rebase`, and `cherry-pick`?**

- **`git fetch`**: Downloads changes from a remote repository but does not automatically merge them into the local working branch.
- **`git pull`**: Fetches changes from a remote repository and immediately merges them into the local branch.
- **`git merge`**: Combines the changes from one branch into another, creating a merge commit if necessary.
- **`git rebase`**: Moves or re-applies commits from one branch onto another, re-writing the commit history to avoid merge commits.
- **`git cherry-pick`**: Selects specific commits from one branch and applies them onto another, without merging the entire branch.

4. **What are the differences between `reset`, `revert`, `restore`, `switch`, and `checkout`?**

- **`git reset`**: Moves the current branch's HEAD to a specific commit, optionally modifying the working directory and staging area. It can undo commits.
- **`git revert`**: Creates a new commit that undoes the changes introduced by a previous commit, preserving the history.
- **`git restore`**: Used to restore files in the working directory from either the index or a commit.
- **`git switch`**: Used to switch branches or create new ones.
- **`git checkout`**: Can switch branches or restore files, but with more general functionality compared to `switch`.

5. **What is meant by stage or index? What does `stash` do?**

The **stage** (or index) is a temporary storage area where changes are gathered before committing them. It allows you to prepare the changes that will be part of the next commit.  
**`git stash`** temporarily saves changes (both tracked and untracked) from your working directory that haven't yet been committed, allowing you to switch branches or work on something else without losing those changes. You can later apply the stashed changes back.

6. **What is a snapshot? How is it related to a commit?**

A **snapshot** in Git refers to the complete state of the project at a specific point in time. When you make a commit in Git, you are essentially taking a snapshot of all the files at that moment. Each commit saves a reference to this snapshot, allowing Git to track the entire history of the project through a series of snapshots, rather than a series of differences (diffs) between file versions.

7. **What are the differences between a local repository and a remote repository?**

- A **local repository** is the version of the repository stored on your local machine. You can make changes, commit them, and manage branches locally.
- A **remote repository** is hosted on a server, often shared with others. It is the repository that others can clone, fetch from, and push changes to. A common example of a remote repository is one hosted on platforms like GitHub or GitLab.

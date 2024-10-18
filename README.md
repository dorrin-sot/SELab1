# SELab1

Our static website is a very simple note-taking website that allows users to write and delete notes which are saved in the localstorage of the browser and loaded afterwards from there.

- Creating a .gitignore file: Since all three of us used VSCode for development, we created a .gitignore file and only added the `.DS_Store` file to it which contain the configurations of VSCode.
- Branches: We had one main branch which contained our proper code. One branch (hotfix) was used to quickly patch up bugs and for every feature there was a seperate `feature-*` branch. The main branch was protected by a ruleset which prevented any direct push to it and instead needed a pull request to be merged into. Each pull request also needed an approval from another contributor with write access. Another general branch we had was `styling` which contained general commits related to styling.
- There is also a Github Pages workflow that automatically deploys our the contents of the `main` branch onto github.io. The address of the Deployment is [](https://dorrin-sot.github.io/SELab1).
- We also encountered 2 Merge conflicts during development (images provided below). the first conflict was artificially induced by us while merging pushing conflicting code to the `styling` branch. The second one happened while trying to merge the `hotfix` branch with `main`. 

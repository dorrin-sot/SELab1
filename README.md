# SELab1

Our static website is a very simple note-taking website that allows users to write and delete notes which are saved in the localstorage of the browser and loaded afterwards from there.

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



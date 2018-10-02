# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

## Handle branches and commits

Whenever you want to start working on a new feature you should follow the steps below:

1. Every time you create a new branch you should have the latest changes in master.

```
git pull origin master
```

2. The new branch's name should always be related to the feature you're working on.

```
git checkout -b new_feature_to_be_implemented
```

3. In order to switch between branches, or to find a specific one:

```
git branch
git checkout existing_branch
```

4. In order to see the files that you applied changes to:

```
git status

path/src/routes/file1.js
path/src/routes/file2.js
path/app/client/file3.css
path/app/client/file4.js
```

5. Whenever you want to commit, always double check for the change and then add them to the commit:

```
git add path/src/routes/file1.js path/src/routes/file2.js
git add . (in order to add all the files you changed)
```

6. When you do a commit always add a meaningfull comment about the changes:

```
git commit -m "relevant comment about the changes"
```

7. Finally you want to push to your branch in order to get the changes in the your repository branch:

```
git push origin new_feature_to_be_implemented
```

## Pull Request Process

To create a pull request, you must have changes committed to your new branch.

Go to the repository page on github. And click on "Pull Request" button in the repo header.

![Pull Request Button](https://f.cloud.github.com/assets/676185/316845/2ea7d418-9848-11e2-90af-5b8f31497a51.png)

Pick the branch you wish to have merged using the "Head branch" dropdown. You should leave the rest of the fields as is, unless you are working from a remote branch. In that case, just make sure that the base repo and base branch are set correctly.

![Head Branch Dropdown](https://f.cloud.github.com/assets/676185/316857/0d51b008-9849-11e2-909a-36e6f12436b4.png)

Enter a **title** and **description** for your pull request. Remember you can use [Github Flavored Markdown](https://help.github.com/articles/github-flavored-markdown) in the description and comments

![Title and Description](https://f.cloud.github.com/assets/676185/316873/0c0e4cc8-984a-11e2-89f5-703c31217e17.png)

Finally, click on the green "Send pull request" button to finish creating the pull request.

![Send Pull Request](https://f.cloud.github.com/assets/676185/316876/30d6d0ca-984a-11e2-9c5e-420223c35ed9.png)

You should now see an open pull request.

![Open Pull Request](https://f.cloud.github.com/assets/676185/316899/6a62a7c8-984b-11e2-92ee-182ef257b574.png)

## Handle branches

Below there is a list containing useful commands to operate with branches:

* check for changes between any two branches

```
git diff branch1 branch2
```

* check for changes between the remote branch and the local one

```
git diff HEAD local_branch
```

* check for the file names that were changed between two branched

```
git diff branch1 branch2 --name-only
```

* in order to merge all the files from the remote to your local branch (check before that you are on the right branch):

```
git fetch
```

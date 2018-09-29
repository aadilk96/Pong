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

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

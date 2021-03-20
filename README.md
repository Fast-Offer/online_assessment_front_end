## Work step

1. Download the repo

```bash
git clone https://github.com/Fast-Offer/online_assessment_front_end.git
```

2. Install modules

```bash
npm install
```

3. Work on your own branch

```bash
// Create your own branch.
git branch feature_your_jira_ticket_num
```

4. Always checkout to your own branch before commit

```bash
git checkout -b feature_your_jira_ticket_num
```

5. Feel free to commit ( You can alway commit when you think it's time to save a version. )

```bash
// Add all your files to staging status.
git add .
// -S is optional.
git commit -S -m "xxx"
```

6. Awalys fetch from orgin dev before your final commit of your own feature branch

```bash
// First, go to your local dev branch.
git checkout dev
// Second, get the latest version code from origin dev.
git fetch origin dev
// Then, merge origin dev to your local dev. Now it's time to resolve conflicts if needed.
git merge origin/dev
```

7. After the conflicts have been resolved, it's time to push!

```bash
// Don't forget to go back to your own branch before pushing.
git checkout feature_your_jira_ticket_num
git push https://github.com/Fast-Offer/online_assessment_front_end.git
```

_Notice: After push, go to github to create pull request and don't forget to request code review.

8. Alternatively, you also can use git-cz to help commit

```bash
npm install git-cz
git add .
npx git-cz -S
git push -u origin feature_xxx
```

_Notice: If your code can not pass the eslint test, your code can not be commited
because of git hook_

9. The request a pull request in github, after the peer review, merge it
   and delete the feature_xxx branch

## Run the front_end

- Run the app

```bash
npm run start
```

- Run eslint help you check your code

```bash
npm run lint
```

- Use eslint auto fix

```bash
npm run lint-fix
```

- Show unit test coverage

```bash
npm run test -- --coverage
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

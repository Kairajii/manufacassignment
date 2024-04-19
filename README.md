# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Prerequisites
Make sure you have Node.js and Yarn installed on your machine.

### Installation
Clone the repository
git clone (https://github.com/Kairajii/manufacassignment.git)

Navigate into the project directory
cd your-repo

Install dependencies
yarn install

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

### Calculating Mean, Mode, and Median
This project includes functionality to calculate the mean, mode, and median of the "Flavanoids" property for the entire dataset, as well as the "Gamma" property created for each data point. These calculations are done class-wise based on the "Alcohol" property.

Mean: The mean is calculated as the average value of the property for each class.
Median: The median is the middle value of the property when the data is sorted in ascending order.
Mode: The mode is the most frequently occurring value of the property in each class.

### Using Mantine Table Component
The project also includes a React component called GammaTable that displays the calculated mean, median, and mode for the "Gamma" property in a tabular format using Mantine's Table component.
The project also includes a React component called FlavanoidsTable that displays the calculated mean, median, and mode for the "Flavanoids" property in a tabular format using Mantine's Table component.

The table is styled to have proper borders and alignment, making it easy to read and understand the statistics for each class.

### Styling with Tailwind CSS
This project utilizes Tailwind CSS for styling the components and UI elements. Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-built classes for quickly styling elements.

### Custom Styles
The table in this project is styled using Tailwind CSS classes to achieve a clean and modern look. Some of the key styles applied include:

Border: Borders are added to the table and table cells using Tailwind's border utilities (border, border-solid, border-gray-300).
Padding: Padding is applied to the table cells (p-4) to provide spacing between the content and the cell edges.
Text Alignment: Text alignment is set to center for the table headers (text-center) to improve readability.
Integration with React Components
Tailwind CSS classes are used directly within React components to style elements. For example, the Table component from the Mantine UI library is styled using Tailwind CSS classes to customize its appearance.

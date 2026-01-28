# Vercel Speed Insights Implementation

This document describes how Vercel Speed Insights is integrated into the Symbiosis School website project.

## Overview

Vercel Speed Insights is integrated into this React + Vite project to monitor and track performance metrics. This helps us understand how users experience the website and identify areas for improvement.

## Prerequisites

- **Vercel account**: [Sign up for free](https://vercel.com/signup)
- **Vercel project**: [Create a new project](https://vercel.com/new)
- **Vercel CLI**: Install using `npm i vercel`

## Installation

The `@vercel/speed-insights` package is already included in the project's dependencies:

```bash
npm install @vercel/speed-insights
```

## Integration in React

The SpeedInsights component has been added to the main application file (`src/App.jsx`):

```jsx
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
      {/* ... other components ... */}
      <SpeedInsights />
      <Routes>
        {/* ... routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Component Placement

The `<SpeedInsights />` component is placed at the root level of the application (in `App.jsx`), which ensures that performance tracking is active across all pages and routes.

## Vercel Dashboard Configuration

To enable Speed Insights in the Vercel dashboard:

1. Go to the [Vercel dashboard](/dashboard)
2. Select your Project
3. Click on the **Speed Insights** tab
4. Select **Enable** from the dialog

**Note**: Enabling Speed Insights will add new routes (scoped at `/_vercel/speed-insights/*`) after your next deployment.

## Deployment

Speed Insights will automatically track metrics once the application is deployed to Vercel:

```bash
vercel deploy
```

Alternatively, you can [connect your git repository](/docs/git#deploying-a-git-repository) to enable automatic deployments.

## Viewing Data

Once your app is deployed and users have visited your site:

1. Go to your [Vercel dashboard](/dashboard)
2. Select your project
3. Click the **Speed Insights** tab
4. View your performance metrics

After a few days of visitor traffic, you'll be able to explore your metrics in detail.

## Development

During local development, the SpeedInsights component is present but will not send data to Vercel. This is the expected behavior. Speed Insights will only track metrics in production deployments.

### Building for Production

To build the project:

```bash
npm run build
```

The build includes all necessary configurations for Speed Insights to work in production.

## Privacy and Compliance

Vercel Speed Insights adheres to privacy and data compliance standards. For more information, see [privacy and compliance](/docs/speed-insights/privacy-policy) documentation.

## Next Steps

- [Learn more about the @vercel/speed-insights package](/docs/speed-insights/package)
- [Explore available metrics](/docs/speed-insights/metrics)
- [Understand pricing and limits](/docs/speed-insights/limits-and-pricing)
- [Troubleshooting guide](/docs/speed-insights/troubleshooting)

## Resources

- [Official Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [@vercel/speed-insights npm package](https://www.npmjs.com/package/@vercel/speed-insights)

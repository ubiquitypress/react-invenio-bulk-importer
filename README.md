# Invenio Bulk Importer

A modern React component library for Invenio bulk import functionality, built with TypeScript, PandaCSS, and Semantic UI React.

## Overview

This library provides a comprehensive set of React components for managing bulk imports in Invenio applications. It includes features for task management, file uploads, metadata processing, search functionality, and progress tracking with a modern, responsive interface.

## Features

- 📦 **Bulk Import Management**: Create, manage, and execute bulk import tasks
- 📁 **File Upload**: Advanced file uploader with drag-and-drop support
- 🔍 **Search & Filter**: Powerful search with faceted filtering
- 📊 **Progress Tracking**: Progress monitoring with visual feedback
- 📋 **Task Details**: Comprehensive task management with detailed views
- ♿ **Accessibility**: Semantic HTML with proper ARIA support

## Installation

```bash
# Using yarn (recommended)
yarn add react-invenio-bulk-importer

# Using npm
npm install react-invenio-bulk-importer
```

## Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
yarn add react react-dom semantic-ui-react semantic-ui-css react-invenio-forms
```

## Quick Start

### Search Interface

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BulkImporter } from "react-invenio-bulk-importer";
import "react-invenio-bulk-importer/style.css";

const BulkImporterSearchApp = () => {
  return <BulkImporter.Search />;
};

const initializeBulkImporter = () => {
  const domContainer = document.getElementById("invenio-search-config");
  
  if (!domContainer) {
    console.error("Could not find element with id 'invenio-search-config'");
    return;
  }

  ReactDOM.render(<BulkImporterSearchApp />, domContainer);
};

initializeBulkImporter();
```

### Task Details Interface

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BulkImporter } from "react-invenio-bulk-importer";
import "react-invenio-bulk-importer/style.css";

const BulkImporterDetailsApp = ({ taskId }) => {
  return <BulkImporter.TaskDetails taskId={taskId} />;
};

const initializeBulkImporterDetails = () => {
  const domContainer = document.getElementById("invenio-details-config");
  
  if (!domContainer) {
    console.error("Could not find element with id 'invenio-details-config'");
    return;
  }

  // Extract data from DOM attributes
  const taskId = JSON.parse(domContainer.dataset.pid);

  ReactDOM.render(<BulkImporterDetailsApp taskId={taskId} />, domContainer);
};

initializeBulkImporterDetails();
```

## HTML Integration

This library is designed to integrate with Invenio's template system.

The `data-pid` attribute should contain a task ID that will be parsed by the component.

## Components

### Core Components

The library exposes components through the `BulkImporter` namespace:

#### `<BulkImporter.Search />`
Complete search interface with task listing, filtering, and management capabilities.

```jsx
import { BulkImporter } from 'react-invenio-bulk-importer';

<BulkImporter.Search />
```

#### `<BulkImporter.TaskDetails />`
Detailed view component for individual import tasks with records, status, and management.

```jsx
import { BulkImporter } from 'react-invenio-bulk-importer';

<BulkImporter.TaskDetails taskId="task-123" />
```

## Styling

This library uses PandaCSS for styling, which provides:

- **Type-safe styling**: Compile-time CSS validation
- **Logical properties**: Better internationalization support
- **Responsive design**: Mobile-first responsive utilities
- **Design tokens**: Consistent spacing, colors, and typography

## Development

### Prerequisites

- Node.js 18+ 
- Yarn 4.x (recommended)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd invenio-bulk-importer-react

# Install dependencies
yarn install

# Generate PandaCSS styles
yarn prepare

# Start development server
yarn dev
```

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn type-check` - Run TypeScript type checking
- `yarn check` - Run linting, type checking, and dependency sync
- `yarn preview` - Preview production build

### Project Structure

```
src/
├── components/           # React components
│   ├── core/            # Main feature components
│   │   ├── bulk-importer/
│   │   ├── file-uploader/
│   │   ├── search/
│   │   └── task-details/
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── services/            # API services
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── theme/               # Global styles
```

## API Integration

The library expects specific API endpoints for full functionality:

### Required Endpoints

- `GET /api/tasks` - List import tasks
- `POST /api/tasks` - Create new import task
- `GET /api/tasks/:id` - Get task details
- `DELETE /api/tasks/:id` - Delete task
- `POST /api/tasks/:id/run` - Execute import
- `GET /api/tasks/:id/records` - Get task records
- `GET /api/config/record-types` - Get available record types

### Configuration

```jsx
const apiConfig = {
  baseURL: 'https://your-invenio-instance.com/api',
  timeout: 30000,
  // Additional axios config...
};
```

### Code Style

This project uses:

- **Biome** for linting and formatting
- **TypeScript** for type safety
- **PandaCSS** for styling
- **Semantic UI React** for base components

## License

This project is licensed under the MIT License - see the LICENSE file for details.


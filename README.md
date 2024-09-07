# To-Do List Application

A simple to-do list application built with React and Vite, utilizing Tailwind CSS for styling and Local Storage for data persistence.

## Features

- Add new to-do items
- Mark to-do items as complete
- Delete to-do items
- Data persistence using Local Storage

## Technologies Used

- **React**: For building the UI components
- **Vite**: For fast development build
- **Tailwind CSS**: For styling the application
- **Local Storage**: For persisting data across page reloads

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-list-react.git
   cd todo-list-react
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:5173](http://localhost:5173) to view the app.

## Usage

- To add a new to-do, type your task into the input field and click "Add".
- To mark a to-do as complete, check the checkbox next to the task.
- To delete a to-do, click the "Delete" button next to the task.

## Folder Structure

```
.
├── public             # Public assets
├── src
│   ├── components
│   │   ├── AddTodo.jsx      # Component for adding new to-dos
│   │   ├── TodoItem.jsx     # Component for individual to-do items
│   │   └── TodoList.jsx     # Component for displaying the list of to-dos
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── tailwind.config.js       # Tailwind CSS configuration
```

## Troubleshooting

### Tailwind CSS Not Working

If Tailwind CSS is not applying styles, ensure the following:

- Tailwind CSS is correctly installed and imported in your `index.css` file.
- The `tailwind.config.js` file is properly configured.
- Restart the development server if you make changes to Tailwind configuration.

### Local Storage Not Persisting

If todos do not persist on reload:

- Check if the browser's Local Storage is enabled.
- Inspect the Application tab in the browser's DevTools to ensure todos are being saved under the correct key.
- Clear Local Storage if old or corrupt data is present.

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

Created by [Sayan Senapati](https://www.linkedin.com/in/sayan-senapati-430833211/) - feel free to contact me!

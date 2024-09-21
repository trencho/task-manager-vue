# Task Manager Vue App

This is a simple task management application built with Vue.js. It allows users to register, log in, and manage their tasks efficiently.

## Features

- **User Authentication:**
    - Register for a new account.
    - Log in with your credentials.

- **Task Management:**
    - View a list of all tasks.
    - Create new tasks with descriptions.
    - Edit existing task details.
    - Mark tasks as complete.
    - Delete tasks.

## Project setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-manager-vue.git
   ```

2. **Navigate to the project directory:**
    ```bash
    cd task-manager-vue
    ```

3. **Install dependencies:**
    ```bash
    yarn install
    ```

## Running the App

1. **Development mode:**
   ```bash
   yarn serve
   ```

    This will start the development server with hot-reloading.

2. **Production mode:**
   ```bash
   yarn build
   ```

   This will create a production-ready build in the dist folder.

3. **Lints and fixes files:**
    ```bash
    yarn lint
    ```

## App Architecture

The Vue.js application is structured as follows:

- **Components:**
  - `RegisterForm.vue`: Handles user registration.
  - `LoginForm.vue`: Handles user login.
  - `TaskList.vue`: Displays the list of tasks.
  - `TaskForm.vue`: Provides a form for creating and editing tasks.
  - `LogoutButton.vue`: Provides a button for logging out.

- **Store:**
  - Manages the application state, including user authentication and task data.

- **API:**
  - Communicates with a backend API to handle user authentication and task persistence

## Usage

1. **Register:**
   - Visit the registration page.
   - Provide your username, email and password.
   - Click "Register".

2. **Login:**
   - Visit the login page.
   - Enter your username and password.
   - Click "Login".

3. **Manage Tasks:**
   - Once logged in, you can view, create, edit and delete tasks.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

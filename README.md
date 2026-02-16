# QR Code Attendance System Setup Instructions

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)
- A code editor (e.g., Visual Studio Code)

## Step-by-Step Setup

### 1. Clone the Repository
First, clone the repository to your local machine. Open a terminal and run:
```bash
git clone https://github.com/houstonckock-ctrl/12A2-register-class.git
```

### 2. Navigate to the Project Directory
Change your working directory to the project folder:
```bash
cd 12A2-register-class
```

### 3. Install Dependencies
Install the necessary packages using npm:
```bash
npm install
```

### 4. Configuration
You will need to set up environment variables. Create a `.env` file in the root directory of your project and add the following entries:
```
QR_CODE_SECRET=<your_secret_key>
DATABASE_URL=<your_database_url>
```

### 5. Database Setup
Set up your database as follows:
- If you're using MySQL, create a new database and configure the connection string in the `.env` file.
- Run the migrations with:
```bash
npm run migrate
```

### 6. Running the Application
Now you can start the application:
```bash
npm start
```

### 7. Accessing the Application
Open your web browser and go to `http://localhost:3000` to access the QR code attendance system.

## Additional Notes
- Ensure your firewall or antivirus does not block the application.
- You may want to create a separate branch for making changes to avoid disrupting the main codebase.

## Troubleshooting
If you encounter issues, please check the console for error messages and consult the documentation or community forums for support.
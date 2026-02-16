# Deployment Instructions for Google Apps Script Backend and Attendance System

This document provides step-by-step instructions for deploying the Google Apps Script backend and setting up the attendance system in the `12A2-register-class` repository.

## 1. Setup Google Apps Script Environment

### Step 1: Access Google Apps Script
- Go to [Google Apps Script](https://script.google.com) and log in with your Google account.  

### Step 2: Create a New Project
- Click on the `New Project` button to create a new Apps Script project.

### Step 3: Configure Project Settings
- Rename your project appropriately (e.g., `AttendanceSystem`).
- Go to `File` > `Project properties` to configure necessary settings.

## 2. Add Your Script

### Step 1: Copy the Script
- Copy the relevant script code from the repository into the Apps Script editor.  

### Step 2: Save Your Script
- Click on the `Save` icon to save your application.

## 3. Publish Your Script

### Step 1: Publish the Script
- Click on `Publish` > `Deploy as web app...`
  - **Project version:** Select `New`
  - **Execute as:** `Me`
  - **Who has access:** `Anyone` (if public access is required)

### Step 2: Deploy
- Click `Deploy`. You may need to authorize the script.
- Note the `Web App URL` for later use in your application.

## 4. Set Up Attendance System

### Step 1: Create a Google Sheet
- Go to Google Drive and create a new Google Sheet for attendance.

### Step 2: Link the Sheet to Your Script
- In your Apps Script project, link the new Google Sheet by using its ID in your script code.

### Step 3: Test the System
- Run your script to ensure it successfully logs attendance data.

## 5. Additional Configuration (Optional)
- Set triggers for automatic data logging:  
  - Go to `Edit` > `Current project's triggers`  
  - Click `Add Trigger` and configure as needed.

## Conclusion

You have now deployed the Google Apps Script backend and set up the attendance system. Test thoroughly to ensure all functionalities are working as expected.

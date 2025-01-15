# Diagram NewNotes (MPA).

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant DataBase

    User->>Browser: Fills out the form and clicks "Submit"
    Browser->>Server: Sends HTTP POST request to /new_note
    Server->>DataBase: Saves the note in the database
    DataBase-->>Server: Confirms save
    Server->>Browser: Responds with HTTP 302 and redirects to /notes
    Browser->>Server: Sends HTTP GET request to /notes
    Server->>Browser: Responds with HTML of the notes page
    Browser->>Server: Requests main.css, main.js, data.json
    Server->>Browser: Responds with main.css, main.js, data.json

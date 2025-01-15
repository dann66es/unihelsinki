# Diagrama de SPA (creating new Note)


```mermaid

sequenceDiagram
    participant  User
    participant  Browser
    participant  Server
    participant  Database

    User->>Browser: Fills out the form and clicks "Submit"
    Browser->>Server: Sends HTTP POST request to /new_note_spa with JSON data
    Server->>DataBase: Saves the new note as JSON
    DataBase-->>Server: Save confirmation
    Server-->>Browser: Responds with HTTP 201 Created (no redirection)
    Browser-->>Browser: Updates the interface with the new note without reloading the page

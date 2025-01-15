# Diagrama de SPA


```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant ContentTypeHeader
    participant Database

    User->>Browser: Fills out the form and clicks "Submit"
    Browser->>Server: Sends HTTP POST request to /new_note_spa
    ContentTypeHeader->>S: Data is in JSON format
    Server->>DataBase: Saves the new note as JSON
    DataBase-->>Server: Save confirmation
    Server-->>Browser: Responds with HTTP 201 Created (no redirection)
    Browser-->>Browser: Stays on the same page without sending additional HTTP requests

# Diagram SPA (access as user)


```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant ContentTypeHeader
    participant Database

    User->>Browser: Navigates to https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: Requests index.html
    Server->>Browser: Responds with index.html
    Browser->>Server: Requests main.css
    Server->>Browser: Responds with main.css
    Browser->>Server: Requests spa.js
    Server->>Browser: Responds with spa.js
    Browser->>Server: Requests data.json
    Server->>Browser: Responds with data.json (list of notes)
    


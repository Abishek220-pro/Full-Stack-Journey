# 🌐 Web Fundamentals: Request–Response Cycle

A visual guide to understanding how a web browser communicates with servers, resolves domains, transfers data, and renders web pages.

---

# 📋 Topics Covered

* 🔄 Request–Response Cycle
* 🌍 DNS (Domain Name System)
* 🔒 HTTP/HTTPS
* 🖥️ Client–Server Model
* 🎨 Critical Rendering Path
* 📡 IP Address & Ports

---

# 🖼️ Complete Architecture Diagram

> Add your complete Excalidraw diagram here.

![Complete Web Flow](images/complete-web-flow.png)

---

# 🔄 Request–Response Cycle

The Request–Response Cycle describes how a browser requests resources from a server and receives a response.

### Flow

1. User enters a URL.
2. Browser resolves the domain using DNS.
3. Browser establishes a connection with the server.
4. HTTP/HTTPS request is sent.
5. Server processes the request.
6. Server returns a response.
7. Browser renders the content.

### Diagram

![Request Response Cycle](images/request-response-cycle.png)

---

# 🌍 DNS (Domain Name System)

DNS translates human-readable domain names into IP addresses.

### Example

Domain:
example.com

IP Address:
93.184.216.34

### DNS Resolution Steps

1. Browser requests DNS lookup.
2. DNS server finds the corresponding IP address.
3. DNS server returns the IP.
4. Browser connects to the destination server.

### Diagram

![DNS Flow](images/dns-flow.png)

---

# 🔒 HTTP / HTTPS

HTTP and HTTPS are protocols used for communication between clients and servers.

| Protocol | Port | Security              |
| -------- | ---- | --------------------- |
| HTTP     | 80   | ❌ Not Encrypted       |
| HTTPS    | 443  | ✅ Encrypted (TLS/SSL) |

### HTTPS Flow

1. Browser initiates connection.
2. TLS handshake occurs.
3. Secure channel is established.
4. Data is transferred securely.

### Diagram

![HTTP HTTPS](images/http-https.png)

---

# 🖥️ Client–Server Model

The Client–Server Model is the foundation of web communication.

### Components

#### Client

* Browser
* Mobile App
* Desktop Application

#### Server

* Web Server
* API Server
* Database Server

### Communication

Client → Request

Server → Response

### Diagram

![Client Server Model](images/client-server-model.png)

---

# 🎨 Critical Rendering Path

The Critical Rendering Path is the sequence the browser follows to display a web page.

### Steps

1. Parse HTML
2. Build DOM Tree
3. Parse CSS
4. Build CSSOM
5. Create Render Tree
6. Layout Calculation
7. Paint Pixels
8. Display Page

### Rendering Flow

```text
HTML
 ↓
DOM
 ↓
CSS
 ↓
CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Screen
```

### Diagram

![Critical Rendering Path](images/critical-rendering-path.png)

---

# 📡 IP Address & Ports

An IP address identifies a device on a network, while a port identifies a specific service.

### Example

IP Address:
203.0.113.10

### Common Ports

| Service | Port |
| ------- | ---- |
| HTTP    | 80   |
| HTTPS   | 443  |
| SSH     | 22   |
| FTP     | 21   |
| MySQL   | 3306 |

### Connection Example

```text
Browser
   |
   | HTTPS Request
   |
203.0.113.10:443
   |
Web Server
```

### Diagram

![alt text](image.png)

---

# 🚀 End-to-End Flow

```text
👨‍💻 User
   │
   ▼
🌐 Browser
   │
   ▼
🌍 DNS Server
   │
   ▼
📡 IP Address
   │
   ▼
☁️ Internet
   │
   ▼
🏢 Web Server
   │
   ▼
🗄️ Database
   │
   ▼
🏢 Web Server
   │
   ▼
📄 HTML / 🎨 CSS / ⚡ JS
   │
   ▼
🌐 Browser
   │
   ▼
🎨 Critical Rendering Path
   │
   ▼
🖥️ Screen
```

---

# 🛠️ Tools Used

* Excalidraw
* Web Browser
* DNS
* HTTP/HTTPS
* HTML
* CSS
* JavaScript

---

# 📚 Learning Outcome

After completing this project, you will understand:

✅ How DNS works

✅ How browsers communicate with servers

✅ HTTP vs HTTPS

✅ IP addresses and ports

✅ Client–Server architecture

✅ Critical Rendering Path

✅ Complete Request–Response Cycle

## Topic of internet -fundamentals
### 01 - Internet Fundamentals
- [X] Internet Architecture
- [X] Client-Server Model
- [X] DNS, IP Addressing
- [X] TCP, UDP
- [X] HTTP, HTTPS, SSL/TLS
- [X] Cookies, Sessions
- [X] Caching, CDN
- [X] Load Balancing

### Internet Architecture:
             The internet is not one single thing. It is a system of systems — millions of computers, cables, routers, and rules all connected together worldwide.

             Internet Architecture = the organized design of how all these pieces are arranged and how they talk to each other.


             Think of it like a city:

             Roads = cables and WiFi
             Vehicles = data packets
             Traffic rules = protocols (HTTP, TCP, IP)
             Buildings = servers and clients
             Addresses = IP addresses

            
            The "architecture" is just the blueprint of how this entire city is built.

### Client-Server Model:
             It is a way two computers communicate.
             One computer asks → other computer answers.
             That's the whole model. Nothing more.

             The one that asks = Client
             The one that answers = Server
### DNS, IP Addressing:

             Every computer in the world has a unique number address called an IP Address.
                          
             But humans can't remember numbers like 142.250.195.46. We remember names like google.com.

             So someone built a system that converts names into numbers automatically.
             That system is called DNS — Domain Name System.

### TCP, UDP:
             TCP (Transmission Control Protocol) is a way for two computers to communicate reliably.

             Imagine sending 100 pages of a document.

             If page 25 gets lost, the receiver won't have the complete document.

             TCP solves this by:
                Checking if data arrived.
                Resending lost data.
                Keeping data in the correct order.


            UDP (User Datagram Protocol) is a way for two computers to communicate quickly.

            Imagine a voice call (like WhatsApp or Zoom).

            If one tiny millisecond of audio gets lost, you don't stop the whole call.
            You just continue talking.

            UDP is used for:

            Video calls
            Online games
            Live streaming  
### HTTP, HTTPS, SSL/TLS:
            HTTP:

            A protocol used for communication between a browser and a server.

            Used to request and receive web pages, images, videos, APIs, etc.  

                    Request 
            Browser → GET /home
                    Response 
            Server → HTML Page

            HTTPS:
            HTTP + Security
            (It’s just HTTP with an extra lock.)

            SSL/TLS:
            The technology that adds the lock.
            Encrypts data so no one can read it. 

### Cookies & Sessions:

            A small piece of data stored in the user's browser.
            Used to remember information about the user.

                     Login Success
                         ↓
                    Server sends Cookie
                         ↓
                     Browser stores Cookie
                         ↓
                Future Requests include Cookie

            Session

            What?
            A way for the server to remember a user.
            User data is stored on the server.

            Why?
            Storing important data in the browser is not secure.
            Server keeps the actual user information.      

                  User Login
                       ↓
                Server Creates Session
                       ↓
                Session ID Generated
                       ↓
                  Cookie Stores Session ID
                        ↓
                 Browser Sends Session ID
                            ↓
                  Server Identifies User


### Caching & CDN:
             Caching:Storing copies of files temporarily.
             Purpose: Faster loading, less server usage.
             Types: Browser cache, server cache.
             CDN: Content Delivery Network.
             Network of distributed servers.
             Purpose: Deliver content from nearest server.

### Load Balancing:
             Purpose: Distribute traffic across multiple servers.
             Types: Round Robin, Least Connections.
             Scalability: Allows handling more users.   
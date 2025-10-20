import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introduction",
    content: `I feel like I've over extended on leetcode, and severely under extended my time on system design. Hence, I'll be documenting all the most relevant system design concepts I've come across.`
  },
  {
    id: 2,
    title: "Typing google.com into my browser?",
    content: `Seems like such a simple question that we all should know, but what actually happens under the hood? 
1. The browser takes the url (google.com) and sends it to the DNS server. The DNS server will do a look up and return the server's IP address.
2. The browser establishes a TCP connection with the server through a three-way handshake (SYN, SYN-ACK, ACK).
3. The browser sends an HTTP request to the server.
4. The server sends an HTTP response back to the browser (HTML, CSS, JavaScript).
5. The browser renders the page using the response!
  `
  },
  {
    id: 3,
    title: "Databases",
    content: ` There are two types of databases: relational and non-relational. 
    Relational databases (SQL databases) are used to store data in table and rows, which you can perform JOIN operations on via SQL. Common ones include MySQL, PostgreSQL, and SQLite.
    Non-relational databases (NoSQL databases) will store data in a key-value pair, column storage, graph storage, or document storage. Common ones include MongoDB, Cassandra, and Redis.
    When do I use which?
    Non-relational databases are better when
    - Dealing with massive amounts of data
    - Low-latency is required
    - No Relational data is required
    - When only need to serialize and deserialize data
    Otherwise use a relational database.
    `
  },
  {
    id: 4,
    title: "Scaling",
    content: ` There are two main types of scaling, vertical and horizontal. 
    Vertical scaling ("scape up") means adding more power (CPU, RAM) to your server.
    Horizontal scaling ("scale out") means adding more servers to your server pool.
    When do I use which?
    Vertical scaling is better with low traffic, since it's simple. But the cons are that there are limits to how much power you can add. And if the server crashes, everything crashes (violates SPOF)
    Horizontal scaling is better with high traffic, and large scale applications.
    Consider your black-friday app running on 1 server. On black friday, you'll recieve so much traffic that it would reach the web server's load limit. User's will start to experience slower responsiveness and eventually, the server will crash.
    A load balancer is used for this reason, to distribute traffic evenly across multiple servers.
    `
  },
  {
    id: 5,
    title: "Load Balancer",
    content: `The app will connect to a load balancer via the server's IP address. Then the load balance will connect to each server via a private IP address.
    This allows the load balancer to identify and redirect traffic to the appropriate server.
    `
  },
  {
    id: 6,
    title: "Database Replication",
    content: `In the same way having multiple servers prevents SPOF. We use database replication (multiple databases) to prevent data loss.
    This is modelled via the master-slave relationship. The master database (only writes) and the slave database (only reads) replicate off the master database.
    App's typically have more reads than writes, hence # of slaves > # of masters.
    Having slave databases also allow for parallel reads, leading to better performance.
    `
  },
  {
    id: 7,
    title: "Cache",
    content: `Cache is a temporary storage area to store the result of expensive responses or frequently accessed data in-memory.
    When the browser requests a resource, the web server checks if the cache has the resource. If it does, return it instantly. If not, the server will query the database for the response, add it to the cache, and return it.
    Something to note is databases and cache's aren't always in sync i.e if the database undergoes UPDATE SQL query. One strategy is setting a expiration policy (TTL) on the cache, and resetting it.
    If you reset it to often, you'll need to query the database more often. If you reset it to rarely, you'll risk serving stale data.
    Sometimes, a cache can become full. If it does, there are a few strategies to evict and make space. Some include LFU (Least Frequently Used), and FIFO (First In First Out).
    `
  },
  {
    id: 8,
    title: "CDN",
    content: `CDN (Content Delivery Network) are geographcially disposed servers used to deliver static content (images, videos, CSS, JavaScript) to users.
    There like a cache, but for static content.
    `
  },
  {
    id: 9,
    title: "Stateful vs Stateless",
    content: `Stateful servers remember client data from 1 request to the next. 
    Stateless servers keep no information about the client between requests.
    The industry is moving towards stateless servers, as they are more scalable and easier to manage.
    `
  },
  {
    id: 10,
    title: "Message Queue",
    content: `Message queues are durable components stored in memory that support async communication (think buffer for async requests).
    The advantage comes in the decoupling, if the provider is unavailable, the consumer can still function and vice versa.
    `
  },
];

const SystemDesign = () => {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-yellow-300 mt-4 mb-2">
            {line.slice(2, -2)}
          </h4>
        );
      }
      if (line.trim().startsWith('- ')) {
        const indentLevel = line.search(/\S|$/) / 4; // Count number of spaces before content, divide by 4 for indent level
        return (
          <li key={index} className={`text-gray-200 ml-${4 + indentLevel * 4} mb-1`}>
            {line.trim().slice(2)}
          </li>
        );
      }
      if (line.startsWith('For ') && line.includes(':')) {
        return (
          <p key={index} className="text-blue-300 font-medium mt-3 mb-2">
            {line}
          </p>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Handle lines with URLs
      if (line.includes('https://')) {
        const parts = line.split(/(https:\/\/[^\s]+)/);
        return (
          <p key={index} className="text-gray-200 mb-2 leading-relaxed">
            {parts.map((part, i) => {
              if (part.startsWith('https://')) {
                return (
                  <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                  >
                    {part}
                  </a>
                );
              }
              return part;
            })}
          </p>
        );
      }

      return (
        <p key={index} className="text-gray-200 mb-2 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20 relative overflow-x-hidden">
      <Navbar useScrollLinks={false} />
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="relative mb-16 flex justify-center items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <BackButton />
          </div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-4"
            >
              System Design
            </motion.h1>
          </div>
        </div>

        {/* Blog posts */}
        <div>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Blog post header */}
              <header className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300">
                  {post.title}
                </h2>
              </header>

              {/* Full content */}
              <div className="mb-6">
                <div className="text-gray-200 leading-relaxed space-y-4">
                  {formatContent(post.content)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;
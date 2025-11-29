import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";

interface BlogPost {
  title: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Introduction",
    content: `I feel like I've over extended on leetcode, and severely under extended my time on system design. Hence, I'll be documenting all the most relevant system design concepts I've come across.`
  },
  {
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
    title: "Load Balancer",
    content: `The app will connect to a load balancer via the server's IP address. Then the load balance will connect to each server via a private IP address.
    This allows the load balancer to identify and redirect traffic to the appropriate server.
    `
  },
  {
    title: "Database Replication",
    content: `In the same way having multiple servers prevents SPOF. We use database replication (multiple databases) to prevent data loss.
    This is modelled via the master-slave relationship. The master database (only writes) and the slave database (only reads) replicate off the master database.
    App's typically have more reads than writes, hence # of slaves > # of masters.
    Having slave databases also allow for parallel reads, leading to better performance.
    `
  },
  {
    title: "Cache",
    content: `Cache is a temporary storage area to store the result of expensive responses or frequently accessed data in-memory.
    When the browser requests a resource, the web server checks if the cache has the resource. If it does, return it instantly. If not, the server will query the database for the response, add it to the cache, and return it.
    Something to note is databases and cache's aren't always in sync i.e if the database undergoes UPDATE SQL query. One strategy is setting a expiration policy (TTL) on the cache, and resetting it.
    If you reset it to often, you'll need to query the database more often. If you reset it to rarely, you'll risk serving stale data.
    Sometimes, a cache can become full. If it does, there are a few strategies to evict and make space. Some include LFU (Least Frequently Used), and FIFO (First In First Out).
    `
  },
  {
    title: "CDN",
    content: `CDN (Content Delivery Network) are geographcially disposed servers used to deliver static content (images, videos, CSS, JavaScript) to users.
    There like a cache, but for static content.
    `
  },
  {
    title: "Stateful vs Stateless",
    content: `Stateful servers remember client data from 1 request to the next. 
    Stateless servers keep no information about the client between requests.
    The industry is moving towards stateless servers, as they are more scalable and easier to manage.
    `
  },
  {
    title: "Message Queue",
    content: `Message queues are durable components stored in memory that support async communication (think buffer for async requests).
    The advantage comes in the decoupling, if the provider is unavailable, the consumer can still function and vice versa.
    `
  },
  {
    title: "Metrics",
    content: `1KB -> 1MB -> 1GB -> 1TB -> 1PB
    L1 cache: 0.5ns
    L2 cache: 5ns
    Mutex lock: 100ns
    Main memory reference: 100ns
    Disk seek: 10ms

    Takeaways:
    - Memory is fast, but disk is slow
    - Perform loseless compression on data before sending it over the internet
    - Data centers are usually in different regions, so takes time to send data between them
    `
  },
  {
    title: "Availbility",
    content: `High availability means for the system to be continiously operational for a long period of time. 
    Service level agreement (SLA) is an agreement between service provider and customer, defining level of uptime your service will deliver.
    `
  },
  {
    title: "Twitter Example",
    content: `Consider twitter. 300 million monthly users. 50% use Twitter daily. Users post 2 posts / day. 10% tweets contain media. Data stored for 5 years.
    Query per second (QPS): 
    - Daily active users (DAU) = 300 million x 0.5 = 150 million
    - Tweets (QPS) = 150 million x 2 tweets / 24h / 3600s = ~3500
    - Peek QPS = 3500 x 2 = 7000
    Average tweet size
    - tweet_id 64 bytes
    - text 140 bytes
    - media 1MB
    - Media storage: 150 million * 2 * 10% * 1MB = 30TB/day
    - 5-year media storage = 30TB/day * 365days * 5 = 55PB
    `
  },
  {
    title: "Twitter Example",
    content: `Consider twitter. 300 million monthly users. 50% use Twitter daily. Users post 2 posts / day. 10% tweets contain media. Data stored for 5 years.
    Query per second (QPS): 
    - Daily active users (DAU) = 300 million x 0.5 = 150 million
    - Tweets (QPS) = 150 million x 2 tweets / 24h / 3600s = ~3500
    - Peek QPS = 3500 x 2 = 7000
    Average tweet size
    - tweet_id 64 bytes
    - text 140 bytes
    - media 1MB
    - Media storage: 150 million * 2 * 10% * 1MB = 30TB/day
    - 5-year media storage = 30TB/day * 365days * 5 = 55PB
    `
  },
  {
    title: "System Design Interview",
    content: `Good questions to ask:
    - What is the feature set of this application?
    - How many users will there be?
    - How fast will this app scale in the next 3, 6 months?
    - What is the existing tech stack? Can leverage any of simplify the design

    I.e if you are asked to design a news feed system
    - Is this a mobile app or web app?
    - What are the most important features for this app?
    - Is the news feed sorted in reverse chronological order based on recency?
    - Should the weight of your friends post be stronger than others?
    - How many friend can a user have?
    - What is the traffic volume?
    - Can the feed contain images, videos, or just text?
    Next, draw key components on the whiteboard. Things like the client (web/mobile), APIs, web servers, data stores, cache, CDN, message queue, etc.
    Do back-of-the-envelope calculations to evaluate if your blueprint fits the scale constraints. (but this might be a bonus)
    Then go through the flow of your design
    Maybe also include API endpoints or database schema.

    In the news feed example, there are two main components, news feed and user postings.
    For news feed, when a user publishes a post, the corresponding data is written into cache/database, the post will be populated to friends news feed.
    The feed is built by aggregating friend's posts in reverse chronological order.
    `
  },
];

const SystemDesign = () => {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4
            key={index}
            className="text-xl font-semibold text-emerald-300 mt-6 mb-3 tracking-tight"
          >
            {line.slice(2, -2)}
          </h4>
        );
      }
      if (line.trim().startsWith('- ')) {
        return (
          <p
            key={index}
            className="relative pl-6 text-gray-100 mb-1 leading-relaxed text-[15px] md:text-base"
          >
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {line.trim().slice(2)}
          </p>
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
      <div className="max-w-3xl mx-auto pt-24 px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="relative mb-12 flex justify-center items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <BackButton />
          </div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-emerald-300 drop-shadow mb-3"
            >
              System Design
            </motion.h1>
          </div>
        </div>

        {/* Blog posts */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative group border-t border-white/5 pt-8"
            >
              {/* Blog post header */}
              <header className="mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-50 group-hover:text-emerald-300 transition-colors duration-200">
                  {post.title}
                </h2>
              </header>

              {/* Full content */}
              <div className="mb-6">
                <div className="text-gray-200 leading-relaxed space-y-3 text-[15px] md:text-base font-serif">
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
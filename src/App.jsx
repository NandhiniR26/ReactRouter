import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbartask from "./components/task/Navbartask";
import All from "./components/task/All";
import Fullstack from "./components/task/Fullstack";
import Datascience from "./components/task/Datascience";
import Cyber from "./components/task/Cyber";
import Career from "./components/task/Career";
import "./App.css";

const App = () => {
  let data = [
    {
      id: 1,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      head: "Data science",
      description:
        "Are you someone who's not interested in coding, but wants to get placed in tech",
      image:
        "https://s26378.pcdn.co/wp-content/uploads/technology-for-high-schoolers-1030x579.jpg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "10 Best Data Science Frameworks in 2024",
      head: "Data science",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      image:
        "https://www.aeccglobal.my/images/2022/11/08/study-information--technology-abroad.webp",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top Product-Based Companies for Data Science Freshers",
      head: "Data science",
      description:
        "In today's data-driven world, data science has emerged as a crucial field, with companies harnessing",
      image:
        "https://assets.thehansindia.com/h-upload/2020/11/23/1013756-ai.webp",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 4,
      title:
        "What is the Difference between Data Science and Data Engineering?",
      head: "Data science",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      image:
        "https://www.jeduka.com/storage/newsletter/1600509151_Study_IT_in_UK.jpeg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 5,
      title:
        "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      head: "Data science",
      description:
        "Data science has become one of the most sought-after skills in the current job market.",
      image:
        "https://aceds.org/wp-content/uploads/2021/02/AdobeStock_263661826.jpg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 6,
      title: "Best Data Science Books to Learn in 2024",
      head: "Data science",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      image:
        "https://www.eduopinions.com/wp-content/uploads/2021/05/Business-tech-studies-768x434.jpg",
      date: " 2024",
      comment: "No Comments",
    },

    {
      id: 1,
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      head: "Full Stack",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      image:
        "https://media.licdn.com/dms/image/D5612AQGgF3S4jcyX8w/article-cover_image-shrink_600_2000/0/1687238682975?e=2147483647&v=beta&t=rTx3JrP7lW0Z3SqVlRwvNEeGDsIwu281jvSIIIYEKl8",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      head: "Full Stack",
      description:
        "When you're hiring a full-stack developer, what are the most important things you look for?",
      image:
        "https://futureskillsprime.in//sites/default/files/2021-06/Link%20Sharing-Foundation%20Full%20Stack%20Web%20Development.jpg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      head: "Full Stack",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*l1GgcqQ-pRxY5o1t",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 4,
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      head: "Full Stack",
      description:
        "In the world of system design, envision a digital skyscraper - a multifaceted structure built",
      image:
        "https://media.licdn.com/dms/image/D4D12AQHhGxpuBK0asg/article-cover_image-shrink_600_2000/0/1688219211489?e=2147483647&v=beta&t=j2ImZsP_GxSPekNtZkBs5pqUi9JS6TuqPOW-Jm6Cu08",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 5,
      title: "Best Books to Learn Full-Stack Development",
      head: "Full Stack",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      image:
        "https://media.licdn.com/dms/image/C4E12AQFqEHPp0vRqQA/article-cover_image-shrink_720_1280/0/1634393374732?e=2147483647&v=beta&t=KGgxFoFiiQ9yyp5gGEVHvUtGh1HN5z0vUY72kKZcE5M",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 6,
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      head: "Full Stack",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      image:
        "https://media.licdn.com/dms/image/C5112AQEOiqKAJIaOOQ/article-cover_image-shrink_600_2000/0/1583406158263?e=2147483647&v=beta&t=tjiAj0EogVyKNUgsXw0Cu-__TW1RZocpy4lh8VwLM5o",
      date: " 2024",
      comment: "No Comments",
    },

    {
      id: 1,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      head: "Cyber security",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image:
        "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.jpg?s=612x612&w=0&k=20&c=8wFwFVMOpW9gF2GTOx0vagIKDaw3YNFnBVbYCmoTUSY=",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "What Is Hacking? Types of Hacking & More",
      head: "Cyber security",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1709545684phpPfnagp.jpeg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      head: "Cyber security",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      image:
        "https://vitbhopal.ac.in/file/2022/04/Cyber-Security2.jpg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 1,
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      head: "Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      image:
        "https://www.shutterstock.com/image-photo/career-woman-using-her-smartphone-260nw-1186179382.jpg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      head: "Career",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      image:
        "https://static.vecteezy.com/system/resources/previews/030/194/329/non_2x/career-concept-businessman-hand-holding-career-icon-on-virtual-screen-photo.jpg",
      date: " 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top 5 IT Jobs for Economics Students",
      head: "Career",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/47/79/25/1000_F_547792537_I3uiBlr5v5BAKoF8jTtbgOyviZ01DUCe.jpg",
      date: " 2024",
      comment: "No Comments",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbartask />
        </div>

        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<Fullstack data={data} />} />
          <Route path="/datascience" element={<Datascience data={data} />} />
          <Route path="/cybersecurity" element={<Cyber data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
//https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp

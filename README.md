# 📊 FinTrack - AI-Powered Expense Tracker

FinTrack is a modern, responsive, and ultra-fast personal finance tracker built with **React**, **TypeScript**, and **Tailwind CSS**. It helps users manage their daily transactions, view expense distributions through intuitive progress bars, and get personalized financial advice using **Google Gemini AI**.

🚀 **Live Demo:** https://expensetrackgenai.netlify.app/

---

## ✨ Features

- **Dashboard:** Track income, expenses, and total balance with modern UI cards.
- **Visual Analytics:** Category-wise expense breakdown with dynamic progress bars.
- **AI Financial Advisor:** Integrated with the latest `@google/genai` SDK (`gemini-2.5-flash`) to analyze your data and give smart budgeting tips.
- **Performance Optimized:** Implemented a global caching system in React to prevent unnecessary API calls and avoid `429 Rate Limit` errors during page switching.
- **Mobile-First Design:** Features a responsive layout that automatically transitions into a thumb-friendly **Bottom Navigation Bar** on mobile devices.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS
- **Icons:** Lucide React
- **AI Integration:** `@google/genai` (Gemini API)
- **Deployment:** Vercel

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/codeid9/expense-tracker.git
cd expense-transe.git
```

2. Install Dependencies
Make sure you have Node.js installed, then run:

Bash
npm install

Run the database migration scripts or set up your transaction tables using your preferred setup.

3. Set Up Environment Variables
Create a .env file in the root directory of the project and add your respective credentials:

Code snippet
# Google Gemini API Key
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here

4. Run the Development Server
Bash
npm run dev
Open http://localhost:5173 in your browser to see the app live and running!

🤝 Contributing
This project is open-source, and anyone can contribute! Whether you want to fix a bug, optimize the codebase, add a new layout feature, or improve the documentation, your help is highly appreciated.

How to get started:
Fork the repository to your own GitHub account.

Clone your forked repo and create a new branch for your feature:

Bash
git checkout -b feature/AmazingFeature
Commit your modifications with a clear message:

Bash
git commit -m 'Add some AmazingFeature'
Push your branch upstream:

Bash
git push origin feature/AmazingFeature
Open a Pull Request (PR) against the main branch, and I will review and merge it!

📝 License
Distributed under the MIT License. See LICENSE for more information.

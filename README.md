# 🧠 Smart Trash Tracker

> A smart web app that helps users locate nearby garbage bins and check their fill levels in real time.

---
### 🔗 [🌐 Live Demo](https://smart-trash-tracker.vercel.app/)


## 🔍 Real-Life Problem

Urban neighborhoods often suffer from **irregular garbage collection** and **overflowing bins**. It's frustrating for residents to carry trash out only to find the bin full or inaccessible. This app solves that problem by making bin status visible and accessible.

---

## 🌐 Project Overview

**Smart Trash Tracker** is a web-based application that:
- Detects the user's location using Geolocation API
- Displays garbage bins with real-time fill level
- Helps users decide whether it’s a good time to head out with their trash

---

## 🧰 APIs Used

| API | Purpose |
|-----|---------|
| 🌍 Geolocation API | Finds the user's current location to show nearby garbage bins |
| 👀 Intersection Observer API | Lazily loads bin data only when visible on screen |
| 📶 Network Information API | Checks connection type and adjusts the UI accordingly |
| 🗺️ (Optional) Canvas API | Can display visual overlays for bin fill levels |
| 🔁 (Optional) Background Tasks API | Refreshes bin data periodically without UI blocking |

---

## 📱 Features

- 🗺️ **Interactive Map**: View bins with color-coded fill levels  
- 🔔 **Smart Alerts**: Warns if your nearest bin is full or acceptable  
- 🔄 **Auto Updates**: Bin data refreshes periodically  
- ⚡ **Low Data Mode**: UI simplifies automatically on slow networks  

---

## 🎯 Benefits

- Avoids unnecessary trips with full trash bags  
- Encourages better public waste disposal habits  
- Improves waste collection transparency for municipalities  

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have:

- Node.js and npm installed
- Git installed

### ⚙️ Setup Instructions

```bash
git clone https://github.com/sadiqahmednadaf5/smart-trash-tracker.git
cd smart-trash-tracker
npm install
npm run dev


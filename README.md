# Home Care - Baby Sitting & Elderly Care Service Platform 🏥👶👵

Home Care (Care.IO) is a reliable web application designed to provide trusted care services for children, elderly individuals, and those needing special medical attention at home. The platform bridges the gap between professional caregivers and families, ensuring a secure, easy-to-use, and accessible booking experience.

![Home Page Preview](https://i.ibb.co.com/QjMLMR5P/image.png)

## 🌐 Live Demo

<h2>

[Check out the Live Site](https://care-app-phi.vercel.app/)

</h2>

---

## ✨ Key Features

- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views.
- **User Authentication:** Secure login via Email/Password and Google Social Login.
- **Dynamic Booking System:** - Users can select duration (days/hours).
  - Dynamic location selection (Division, District, City, Area).
- **Automated Cost Calculation:** Real-time calculation based on duration and service charges.
- **Personalized Dashboard:** A "My Bookings" page to track status (Pending, Confirmed, Completed, or Cancelled).
- **Service Specific Pages:** Detailed information for Baby Care, Elderly Service, and Sick People Service.
- **Security:** Protected private routes for booking and user profile management.
- **Email Invoices:** Automated email notifications/invoices upon successful booking.

---

## 🛠️ Technologies Used

- **Frontend/Backend/Database:** Next.js, Tailwind CSS, React Icons,Next-Auth,Sweetalert2,MongoDb
- **Deployment:** Vercel
- **Others:** Metadata for SEO

---

## 📖 Pages & Navigation

### 🏠 1. Homepage

- **Hero Banner:** Motivational sliders for caregiving.
- **Mission Section:** Understanding the "Why" behind Home Care.
- **Services Overview:** Quick links to Baby Care, Elderly, and Sick Care.
- **Testimonials:** User success stories and metrics.

### 📝 2. Service Detail Page (`/service/:id`)

- Comprehensive details about the specific care type.
- Direct "Book Service" call-to-action.

### 📅 3. Booking Page (Private Route)

- **Dynamic Forms:** Select location and time.
- **Pricing:** Dynamic cost calculation before confirmation.
- **Validation:** Ensures all data is accurate before saving.

### 🔐 4. Authentication

- **Registration:** Includes NID validation and strict password requirements (6+ chars, uppercase, and lowercase).
- **Session Persistence:** Logged-in users stay authenticated even after page reload.

### 📋 5. My Booking Page (Private Route)

- List view of all user bookings with real-time status updates.
- Options to view details or cancel a pending booking.

### 🚫 6. Error Page (404)

- Custom-designed "Not Found" page with a "Back to Home" button.

---

## 🚀 Installation & Local Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/saimon885/Health-Care.git](https://github.com/saimon885/Health-Care.git)
   ```

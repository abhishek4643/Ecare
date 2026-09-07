# Ecare

A modern, 3D-accelerated healthcare portal and hospital management platform integrating interactive anatomical models, doctor consultation scheduling, and electronic health record management.

[![Frontend](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![3D Graphics](https://img.shields.io/badge/Graphics-Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tooling](https://img.shields.io/badge/Build-Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/Styling-Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Routing](https://img.shields.io/badge/Routing-React_Router_7-CA4245?style=for-the-badge)](https://reactrouter.com/)

---

## Project Overview

Healthcare applications frequently suffer from sterile, text-heavy interfaces that overwhelm patients. Ecare transforms clinical workflows by uniting interactive 3D WebGL anatomical visualizations with practical hospital management systems. Patients can intuitively explore symptoms visually, schedule consultations with medical specialists, and review medical history records in a cohesive digital environment.

**Vision:** Enhance patient agency and clinical workflow efficiency through immersive, accessible web technologies that humanize healthcare delivery.

---

## Key Features

- **Interactive 3D Anatomical Visualizer:** Hardware-accelerated WebGL 3D models built with Three.js for intuitive symptom location mapping.
- **Dual Clinical Portal Architecture:** Distinct, purpose-built interfaces for patients (self-service booking) and physicians (clinical patient queues).
- **Appointment Scheduling Engine:** Automated doctor availability slot booking with real-time calendar conflict resolution.
- **Digital Health Record System:** Centralized record archive managing medical histories, lab analyses, and digital prescriptions.
- **Modern Styled Components UI:** Isolated, theme-driven component styling built with Styled Components 6.
- **Instantaneous React 19 Frontend:** Lightning-fast route transitions and hot module replacement powered by Vite 8.

---

## Use Cases

### For Patients
- Navigate 3D anatomical models to visually pinpoint symptoms when requesting care.
- Search credentialed physicians by medical specialty, rating, and open consultation slots.
- Access digital copies of medical test results and physician prescriptions anywhere.

### For Doctors & Clinical Interns
- Manage daily appointment schedules with real-time patient queue updates.
- Review historical patient diagnostics and attach clinical assessment notes.

### For Healthcare Facility Administrators
- Optimize departmental staff schedules and room availability.
- Track overall patient admission metrics and service throughput.

---

## System Architecture

```
+---------------------------------------------------------------+
|                 Ecare Web Client (React 19)                   |
+---------------------------------------------------------------+
          |                                       |
          v                                       v
+---------------------------+       +---------------------------+
| Three.js 3D Engine        |       | Application Portal        |
| - Anatomical Renderers    |       | - Patient Dashboard       |
| - Interactive WebGL Canvas|       | - Doctor Clinical Suite   |
+---------------------------+       | - Appointment Scheduler   |
                                    +---------------------------+
                                                  |
                                                  v
                                    +---------------------------+
                                    | Styled Components Theme   |
                                    | & Router Navigation       |
                                    +---------------------------+
```

---

## Technology Stack

| Layer | Technologies |
|---|---|
| Core Library | React 19.2, React DOM 19.2 |
| Build Tool | Vite 8.0, @vitejs/plugin-react |
| 3D Visualization | Three.js 0.184 (WebGL Engine) |
| Styling | Styled Components 6.4 |
| Routing | React Router DOM 7.14 |
| Tooling & Code Quality | ESLint 10, React Hooks Linting Plugin |

---

## Project Structure

```
Ecare/
├── public/               # 3D assets, anatomical GLTF/OBJ models, static images
├── src/
│   ├── components/       # 3DCanvas, Navbar, DoctorCard, AppointmentModal
│   ├── pages/            # Home, PatientPortal, DoctorDashboard, Services, About
│   ├── styles/           # Styled Components themes, global styles, and animations
│   ├── App.jsx           # Root layout with React Router 7 configuration
│   └── main.jsx          # Application entry point
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML5 canvas container and document metadata
├── package.json          # Dependency definitions
└── vite.config.js        # Vite build and plugin settings
```

---

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm or yarn
- WebGL-compatible modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishek4643/Ecare.git
   cd Ecare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application and interact with the 3D models.

### Production Build

Compile the production bundle:
```bash
npm run build
npm run preview
```

---

## Future Roadmap

- Real-time WebRTC teleconsultation video calls between doctors and patients.
- AI diagnostic triage chatbot for preliminary symptom evaluation.
- DICOM medical imaging viewer for MRI and CT scans integrated with Three.js.
- Health insurance eligibility and claim verification gateway.

---

## License

Open-source project maintained for healthcare technology innovation and research.

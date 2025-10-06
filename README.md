# 🏆 Zentry Awwwards Landing Page

A stunning, award-worthy landing page inspired by Awwwards-winning designs, built with pure HTML, CSS, and JavaScript. This project showcases modern web design principles with smooth animations, interactive elements, and a captivating user experience.

![Zentry Landing Page](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

## ✨ Features

- **Immersive Hero Section** - Eye-catching hero with dynamic GSAP animations
- **GSAP ScrollTrigger** - Professional scroll-based animations and parallax effects
- **Interactive Elements** - Engaging hover effects and micro-interactions
- **Smooth Transitions** - Butter-smooth animations powered by GSAP
- **Responsive Design** - Fully optimized for all device sizes
- **Modern UI/UX** - Clean, contemporary design following latest trends
- **Performance Optimized** - Hardware-accelerated animations for 60fps
- **Cross-Browser Compatible** - Works seamlessly across modern browsers

## 🚀 Demo

**[🌐 View Live Demo](https://elegant-salamander-8074ea.netlify.app/)**


## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with animations and transitions
- **JavaScript** - Interactive functionality and DOM manipulation
- **GSAP (GreenSock Animation Platform)** - Professional-grade animations
  - GSAP Core - Timeline-based animations
  - ScrollTrigger - Scroll-based animation triggers
  - ScrollSmoother - Smooth scrolling experience (if used)
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Custom Properties** - Dynamic theming and reusable values

## 📂 Project Structure

```
zentry-landing-page/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── images/         # Image assets
│   └── fonts/          # Custom fonts (if any)
└── README.md           # Project documentation
```

## 🎯 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/zentry-landing-page.git
```

2. Navigate to the project directory
```bash
cd zentry-landing-page
```

3. Open `index.html` in your browser
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or use a local development server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server package)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 🎬 GSAP Animations

This project leverages GSAP for professional-grade animations:

### Animation Features
- **Hero Animations** - Fade-in and slide-up effects on page load
- **ScrollTrigger** - Elements animate as you scroll through sections
- **Parallax Effects** - Depth and dimension with layered scroll speeds
- **Stagger Animations** - Sequential animations for lists and grids
- **Smooth Transitions** - Seamless state changes and hover effects

### GSAP CDN
The project uses GSAP via CDN. Make sure these scripts are included in your HTML:
```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<!-- GSAP ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

### Example Animation
```javascript
// Hero text animation
gsap.from('.hero-title', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Scroll-triggered animation
gsap.from('.feature-card', {
  scrollTrigger: {
    trigger: '.feature-card',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
```

## 🎨 Customization

### Colors
Modify the CSS custom properties in `style.css` to change the color scheme:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### Content
Edit the `index.html` file to update text, images, and content sections.

### Animations
Adjust animation timings and effects in the CSS and JavaScript files to match your preferences.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

- Images are optimized for web
- CSS and JavaScript are minified in production
- Lazy loading implemented for images
- Smooth scroll performance with `will-change` property

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aditya Srivastava**
- GitHub: [@yourusername](https://github.com/KAMADO-999)


## 🙏 Acknowledgments

- Inspired by award-winning designs from [Awwwards](https://www.awwwards.com/)
- Design inspiration from modern web trends


⭐ If you found this project helpful, please give it a star!

**Made with ❤️ and lots of ☕**

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "navbar": {
        "about": "About us",
        "terms": "Terms",
        "faq": "FAQ",
        "contact": "Contact",
        "quote": "Get a Quote",
        "language": "Language"
      },
      "cotizar": {
        "titulo": "SAFE TRANSPORTATION FOR YOUR VEHICLE",
        "subtitulo": "Your vehicle in expert hands!<br />Your car, our responsibility. Get a free quote today.",
        "formulario": {
          "titulo": "Get a Free Quote",
          "envioDesde": "Shipping from",
          "placeholderDesde": "City of origin",
          "envioHasta": "To",
          "placeholderHasta": "Destination city",
          "correo": "Email",
          "marca": "Make",
          "modelo": "Model",
          "tipo": "Vehicle type",
          "selectMarca": "Select a make",
          "selectModelo": "Select a model",
          "selectTipo": "Select a type",
          "selectAnio": "Select a year",
          "placeholderCorreo": "Your email",
          "numeroContacto": "Contact Number",
          "placeholderNumero": "Your contact number",
          "vehiculo": "Vehicle",
          "placeholderVehiculo": "model",
          "anio": "Year",
          "placeholderAnio": "Vehicle year",
          "boton": "Get a Quote",
          "estado": "Vehicle condition",
          "runs": "Runs and Drives",
          "inop": "Inop (Inoperable)",
          "nombre": "Name",
          "apellido": "Last Name"
        }
      },
      "review": {
        "titulo": "OUR REVIEWS",
        "clientes": [
          {
            "nombre": "MARCO SANCHEZ",
            "ubicacion": "Shipped from New Mexico to New York",
            "comentario": "I didn't have to waste time searching, I got a quote and found a great price."
          },
          {
            "nombre": "ARIANA HERNANDEZ",
            "ubicacion": "Shipped from Florida to Detroit.",
            "comentario": "Fast, easy, and safe. They delivered perfectly. Excellent service and attention."
          },
          {
            "nombre": "MARIANA LOPEZ",
            "ubicacion": "Shipped from Kansas City to Michigan.",
            "comentario": "So fast that my car arrived before I did. Loved the service!"
          }
        ]
      },
      "infort": {
        "titulo": "WE TRANSPORT YOUR VEHICLE",
        "informacion": [
          "Compare up to 5 quotes.",
          "Our quotes are completely free.",
          "100% insurance coverage in case of accidents.",
          "We offer consultations in your language for transportation."
        ]
      },
      "contacto": {
        "titulo": "YOUR VEHICLE IN EXPERT HANDS!",
        "descripcion": "We know you need security and peace of mind for you and your car, that’s why we are your best choice for vehicle transportation.",
        "boton": "CONTACT US",
        "telefono": "(1) 870-846-0106"
      },
      "goal": {
        "experience": "Years of experience",
        "clients": "Satisfied clients",
        "drivers": "Licensed transporters",
        "advice": "Consultations"
      },

      "step": {
        "title": "TRANSPORTING YOUR CAR HAS NEVER BEEN EASIER!",
        "quote": "GET A QUOTE",
        "review": "CHECK THE OPTIONS",
        "choose": "CHOOSE ONE",
        "pay": "PAY THE RESERVATION",
        "pickup": "WAIT FOR PICKUP",
        "receive": "RECEIVE YOUR VEHICLE",
         "call": "Call us at (1) 000-000-0000"
      },
      "ways":{
        "title" : "PAYMENT OPTIONS"
      },
      "footer" :{
        "cotiza":"Get a quote",
        "terms": "Terms&Conditions",
        "description": "Reliable and affordable vehicle shipping solutions tailored for individuals and businesses throughout the United States"
      },

      "faq": {
    "title": "FAQ'S",
    "description": "In our Frequently Asked Questions section, we've compiled the most comprehensive and clear answers to any questions you may have about our vehicle shipping services.",
    "q1": "What happens if I cancel?",
    "a1": "You can cancel at any time before your vehicle is picked up. If you cancel prior to the assignment of a carrier, you will be charged a $25 dispatch fee. If you cancel after a carrier has been assigned, you will be charged only the amount of the initial payment.",
    
    "q2": "How much in advance should I schedule my auto shipment?",
    "a2": "Schedule as far in advance as you can so that we can do our best to meet your needs. With sufficient advance notice, we can pre-book your shipment to lock in a price and ensure a place on a truck.",
    
    "q3": "Is there a way to track my vehicle’s progress?",
    "a3": "Of course. Call our auto transport experts anytime during the shipping process at (000) 000-0000 to get a real-time update on your vehicle’s location and estimated arrival time.",
    
    "q4": "How long will it take to transport my vehicle?",
    "a4": "This depends on how far it goes, the time of year, and the specific route. Some shipments can be completed in a day or two but could take as long as a few weeks. Severe weather and difficult road conditions can also affect delivery times. Call us at (000) 000-0000 for a custom quote.",
    
    "q5": "What kind of truck do you use to move my vehicle?",
    "a5": "Several carrier options are available. For regular cars, we recommend an open carrier, the same method used to transport new cars. If you’re moving an exotic, collectible, or antique auto, we suggest choosing an enclosed carrier. Call (000) 000-0000 for more details.",
    
    "q6": "How do I get a quote or book a shipment?",
    "a6": "You can request a quote online or call (000) 000-0000 for a free quote or to book a shipment. We’ll help you find the best time and price for your car’s transport.",
    
    "q7": "What forms of payment do you accept?",
    "a7": "We accept all major credit cards for the initial payment, including Mastercard, Visa, Discover, American Express, Zelle, and Cash App. Carriers accept cash or certified checks upon delivery.",
    
    "q8": "Can I choose my pickup and delivery days?",
    "a8": "Yes, with enough advance notice. If truck routes are already planned, you may have to adjust to available dates. The sooner you schedule, the better.",
    
    "q9": "Can I specify pickup and delivery times?",
    "a9": "We provide a 2-4 hour window for pickup and delivery times, considering factors like traffic and weather. Carriers will contact you an hour before arrival.",
    
    "q10": "What if I notice any damage on delivery day?",
    "a10": "Our carriers are insured up to $250,000. We recommend taking photos of your vehicle before and after transport. If you notice damage, document it on the Bill of Lading and contact us immediately.",
    
    "q11": "Do you offer door-to-door pickup and delivery?",
    "a11": "Yes, if the locations are accessible. If not, we’ll arrange the nearest possible alternative.",
    
    "q12": "What if my vehicle is inoperable?",
    "a12": "We can transport inoperable vehicles for an additional fee, as long as they can roll and steer.",
    
    "q13": "What should I do with my E-ZPass or toll pass?",
    "a13": "Remove it before transport, or you may incur toll fees as if you were driving.",
    
    "q14": "How much is the initial payment?",
    "a14": "Your initial payment will be between $100 and $500, depending on factors like vehicle type, transport method, and season. Call (000) 000-0000 for details."
  },
"aboutUs": {
    "title": "ABOUT US",
    "subtitle": "Riatty LLC - Reliable Vehicle Transportation",
    "intro": "Riatty LLC started as a small transport company in Florida, with the vision to provide safe and reliable vehicle transportation services across the United States.",
    "description1": "With over 3 years of experience in the industry, we have grown to become a leading provider of car transport services, serving both individual customers and dealerships across all states.",
    "description2": "Our team of professionals is dedicated to ensuring your vehicle arrives at its destination safely, on time, and without hassle. We use the best equipment and follow strict safety protocols to protect your investment.",
    "mission": "Our mission is to simplify the vehicle transport process by providing exceptional service that exceeds our customers' expectations.",
    "whyChooseUs": "Why Choose Riatty LLC?",
    "benefit1": "3+ years of vehicle transport experience",
    "benefit2": "Coverage in all contiguous U.S. states",
    "benefit3": "Full insurance coverage for your peace of mind",
    "benefit4": "24/7 customer support throughout transport",
    "benefit5": "track your vehicle in real time"
  },

"privacy": {
  "title": "Privacy Policy",
  "updated": "Last updated: April 10, 2025",
  "intro": "This Privacy Policy explains how Riatty LLC collects, uses, and protects your information when using our services.",
  "usage": "By using our website or services, you agree to the terms of this privacy policy.",
  "section1": {
    "title": "Interpretation and Definitions",
    "definition": "Terms used in this policy have meanings defined under specific conditions and apply equally to both singular and plural forms."
  },
  "section2": {
    "title": "Collected Data",
    "point1": "Email address, name, phone number, address, and postal code.",
    "point2": "Usage data including browser type, visit duration, and pages visited.",
    "point3": "Mobile data like device type, OS, and IP address."
  },
  "data": {
    "title": "Use of Your Personal Data",
    "description": "We use your data to manage your account, process transactions, provide updates, and improve our services."
  },
  "cookies": {
    "title": "Cookies and Tracking",
    "description": "We use cookies to enhance user experience and analyze site usage. You may refuse cookies in your browser settings."
  },
  "security": {
    "title": "Security",
    "text": "We strive to protect your data, but no method is 100% secure. We use best practices to secure your information."
  },
  "contact": {
    "title": "Contact Us"
  }
},

"gracias": {
  "thank_you": "Thank you! We've received your information.",
  "transporters_contact": "Soon, transporters will contact you so you can choose the best option.",
  "return_home": "Back to the main page"
}



    }
  },
  es: {
    translation: {
      "navbar": {
        "about": "Nosotros",
        "terms": "Términos",
        "faq": "FAQ",
        "contact": "Contacto",
        "quote": "Cotizar ahora",
        "language": "Idioma"
      },
      "cotizar": {
        "titulo": "TRANSPORTE SEGURO PARA TU VEHÍCULO",
        "subtitulo": "¡Tu vehículo en manos expertas!</br >Tu auto, nuestra responsabilidad. Solicita una cotización gratis hoy.",
        "formulario": {
          "titulo": "Cotiza Gratis",
          "envioDesde": "Envío desde",
          "placeholderDesde": "Ciudad de origen",
          "envioHasta": "Hasta",
          "placeholderHasta": "Ciudad de destino",
          "correo": "Correo",
          "marca": "Marca",
          "modelo": "Modelo",
          "tipo": "Tipo de vehículo",
          "selectMarca": "Selecciona una marca",
          "selectModelo": "Selecciona un modelo",
          "selectTipo": "Selecciona un tipo",
          "selectAnio": "Selecciona un año",
          "placeholderCorreo": "Tu correo electrónico",
          "numeroContacto": "Número de Contacto",
          "placeholderNumero": "Tu número de contacto",
          "vehiculo": "Vehículo",
          "placeholderVehiculo": " modelo",
          "anio": "Año",
          "placeholderAnio": "Año del vehículo",
          "boton": "Cotizar",
          "estado": "Condición del vehículo",
          "runs": "Funciona y se conduce",
          "inop": "Inop (Inoperable)",
          "nombre": "Nombre",
          "apellido": "Apellido"

        }
      },
      "review": {
        "titulo": "NUESTRO REVIEW",
        "clientes": [
          {
            "nombre": "MARCO SANCHEZ",
            "ubicacion": "Envió De New Mexico a New York",
            "comentario": "No tuve que gastar tiempo buscando, cotice y logré un buen precio."
          },
          {
            "nombre": "ARIANA HERNANDEZ",
            "ubicacion": "Envió de Florida a Detroit.",
            "comentario": "Rápido, fácil y seguro, cumplieron de maravilla. Excelente atención y servicio."
          },
          {
            "nombre": "MARIANA LOPEZ",
            "ubicacion": "Envió de Kansas City a Michigan.",
            "comentario": "Tan rápido que mi carro llegó primero que yo. Me encantó el servicio."
          }
        ]
      },
      "infort": {
        "titulo": "TRANSPORTAMOS TU VEHÍCULO",
        "informacion": [
          "Compare hasta 5 cotizaciones.",
          "Nuestras cotizaciones no tienen costo alguno.",
          "Aseguramiento por el 100% en caso de accidentes.",
          "Ofrecemos asesorías en tu idioma para el transporte."
        ]
      },
      "contacto": {
        "titulo": "¡TU VEHÍCULO EN MANOS EXPERTAS!",
        "descripcion": "Sabemos que necesitas seguridad y tranquilidad para ti y tu auto, por eso somos tu mejor opción en transporte de vehículos.",
        "boton": "CONTÁCTANOS",
        "telefono": "(1) 870-846-0106"
      },
      "goal": {
        "experience": "Años de experiencia",
        "clients": "Clientes satisfechos",
        "drivers": "Transportistas licenciados",
        "advice": "Asesorías"
      },
      "step": {
       "title": "¡TRANSPORTAR TU VEHICULO NUNCA FUE TAN FACIL!",
        "quote": "COTIZA",
        "review": "REVISA LAS OPCIONES",
        "choose": "ELIGE EL QUE MÁS TE GUSTA",
      "pay": "PAGA LA RESERVA",
      "pickup": "ESPERA EL PICKUP",
       "receive": "RECIBE TU VEHÍCULO",
       "call": "Llámanos al (1) 000-000-0000"
      },
      "ways":{
        "title" : "MEDIOS DE PAGO"
      },

      "footer" :{
        "cotiza":"Cotiza",
        "terms": "Terminos & Condiciones",
        "description": "Soluciones confiables y accesibles para el transporte de vehículos, diseñadas para clientes particulares y empresas en todo Estados Unidos."
      },

      "faq": {
    "title": "FAQ'S",
    "description": "En nuestra sección de Preguntas Frecuentes, hemos recopilado las respuestas más completas y claras para las dudas que puedas tener sobre nuestros servicios de envío de vehículos.",
    "q1": "¿Qué sucede si cancelo?",
    "a1": "Puedes cancelar en cualquier momento antes de que recojan tu vehículo. Si cancelas antes de la asignación de un transportista, se te cobrará una tarifa de despacho de $25. Si cancelas después de que se haya asignado un transportista, solo se te cobrará el monto del pago inicial.",
    
    "q2": "¿Con cuánta anticipación debo programar el envío de mi vehículo?",
    "a2": "Programa con la mayor anticipación posible para que podamos cumplir con tus necesidades. Con suficiente antelación, podemos reservar tu envío con un precio fijo y asegurar un lugar en un camión.",
    
    "q3": "¿Hay alguna forma de rastrear el progreso de mi vehículo?",
    "a3": "Por supuesto. Llama a nuestros expertos en transporte de vehículos en cualquier momento al (000) 000-0000 para obtener una actualización en tiempo real sobre la ubicación y la llegada estimada de tu vehículo.",
    
    "q4": "¿Cuánto tiempo tomará transportar mi vehículo?",
    "a4": "Depende de la distancia, la época del año y la ruta específica. Algunos envíos pueden completarse en un día o dos, pero otros pueden tardar semanas. El clima y las condiciones de la carretera también pueden afectar los tiempos de entrega. Llámanos al (000) 000-0000 para una cotización personalizada.",
    
    "q5": "¿Qué tipo de camión se usa para mover mi vehículo?",
    "a5": "Tenemos varias opciones de transporte. Para autos normales, recomendamos un transportador abierto, el mismo método usado para autos nuevos. Si transportas un auto exótico, de colección o antiguo, sugerimos un transportador cerrado. Llámanos al (000) 000-0000 para más detalles.",
    
    "q6": "¿Cómo obtengo una cotización o reservo un envío?",
    "a6": "Puedes solicitar una cotización en línea o llamar al (000) 000-0000 para una cotización gratuita o para reservar un envío. Te ayudaremos a encontrar el mejor horario y precio para transportar tu auto.",
    
    "q7": "¿Qué formas de pago aceptan?",
    "a7": "Aceptamos tarjetas de crédito como Mastercard, Visa, Discover, American Express, Zelle y Cash App. Los transportistas aceptan efectivo o cheques certificados en la entrega.",
    
    "q8": "¿Puedo elegir los días de recogida y entrega?",
    "a8": "Sí, con suficiente antelación. Si las rutas ya están planificadas, es posible que debas ajustarte a los días disponibles. Cuanto antes programes, mejor.",
    
    "q9": "¿Puedo especificar horarios de recogida y entrega?",
    "a9": "Proporcionamos un rango de 2-4 horas para la recogida y entrega, considerando factores como tráfico y clima. Los transportistas te contactarán una hora antes de la llegada.",
    
    "q10": "¿Qué hago si noto daños el día de la entrega?",
    "a10": "Nuestros transportistas están asegurados hasta $250,000. Recomendamos tomar fotos antes y después del transporte. Si notas daños, anótalos en el Bill of Lading y contáctanos de inmediato.",
    
    "q11": "¿Ofrecen servicio de recogida y entrega puerta a puerta?",
    "a11": "Sí, siempre que las direcciones sean accesibles. Si no lo son, coordinaremos una ubicación alternativa cercana.",
    
    "q12": "¿Qué pasa si mi vehículo no funciona?",
    "a12": "Podemos transportar vehículos inoperables por una tarifa adicional, siempre que puedan rodar y girar.",
    
    "q13": "¿Qué debo hacer con mi E-ZPass o pase de peaje?",
    "a13": "Quítalo antes del transporte o podrías incurrir en cargos de peaje como si estuvieras conduciendo.",
    
    "q14": "¿Cuánto es el pago inicial?",
    "a14": "El pago inicial oscila entre $100 y $500, dependiendo del tipo de vehículo, el método de transporte y la temporada. Llama al (000) 000-0000 para más información."
  },
  
  "aboutUs": {
    "title": "SOBRE NOSOTROS",
    "subtitle": "Riatty LLC - Transporte de Vehículos Confiable",
    "intro": "Riatty LLC comenzó como una pequeña empresa de transporte en Florida, con la visión de proporcionar un servicio de transporte de vehículos seguro y confiable en todo Estados Unidos.",
    "description1": "Con más de 3 años de experiencia en la industria, hemos crecido para convertirnos en un proveedor líder de servicios de transporte de automóviles, atendiendo tanto a clientes particulares como a concesionarios en todos los estados .",
    "description2": "Nuestro equipo de profesionales está dedicado a garantizar que su vehículo llegue a su destino de manera segura, a tiempo y sin complicaciones. Utilizamos los mejores equipos y seguimos estrictos protocolos de seguridad para proteger su inversión.",
    "mission": "Nuestra misión es simplificar el proceso de transporte de vehículos, proporcionando un servicio excepcional que supere las expectativas de nuestros clientes.",
    "whyChooseUs": "¿Por qué elegir Riatty LLC?",
    "benefit1": "Más de 3 años de experiencia en transporte de vehículos",
    "benefit2": "Cobertura en todo los estados de EE.UU.",
    "benefit3": "Seguro completo para su tranquilidad",
    "benefit4": "Soporte al cliente 24/7 durante todo el transporte",
    "benefit5": "Rastrea tu vehiculo en tiempo real."
  },

"privacy": {
  "title": "Política de Privacidad",
  "updated": "Última actualización: 10 de abril de 2025",
  "intro": "Esta Política de Privacidad explica cómo Riatty LLC recopila, utiliza y protege su información al usar nuestros servicios.",
  "usage": "Al utilizar nuestro sitio web o servicios, usted acepta los términos de esta política de privacidad.",
  "section1": {
    "title": "Interpretación y Definiciones",
    "definition": "Los términos utilizados en esta política tienen significados definidos bajo condiciones específicas y se aplican tanto en singular como en plural."
  },
  "section2": {
    "title": "Datos Recopilados",
    "point1": "Dirección de correo, nombre, número telefónico, dirección y código postal.",
    "point2": "Datos de uso como tipo de navegador, duración de la visita y páginas visitadas.",
    "point3": "Datos móviles como tipo de dispositivo, sistema operativo e IP."
  },
  "data": {
    "title": "Uso de sus Datos Personales",
    "description": "Usamos sus datos para gestionar su cuenta, procesar transacciones, brindar actualizaciones y mejorar nuestros servicios."
  },
  "cookies": {
    "title": "Cookies y Seguimiento",
    "description": "Usamos cookies para mejorar la experiencia del usuario y analizar el uso del sitio. Puede rechazar las cookies desde su navegador."
  },
  "security": {
    "title": "Seguridad",
    "text": "Nos esforzamos por proteger su información, pero ningún método es 100% seguro. Usamos las mejores prácticas para mantener su información segura."
  },
  "contact": {
    "title": "Contáctanos"
  }
},

"gracias": {
  "thank_you": "¡Gracias! Hemos recibido la información.",
  "transporters_contact": "Pronto lo contactarán los transportistas para que usted escoja la mejor opción.",
  "return_home": "Volver a la página principal"
},

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

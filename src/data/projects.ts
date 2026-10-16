import type { WebsiteProject } from "../types/project";

/**
 * Real websites I have designed and built.
 *
 * Content here describes what is visible on each live site. Screenshots are real captures
 * of the live sites, stored in Cloudinary (see scripts/capture-screenshots.mts and
 * scripts/upload-images.mts). To add a project: capture screenshots, upload them, then add an entry.
 */

const screenshotRoot = "portfolio/projects";

export const websiteProjects: WebsiteProject[] = [
  {
    kind: "website",
    slug: "aarshdeep-dental-clinic",
    title: "Aarshdeep Dental Clinic",
    businessName: "Aarshdeep Dental Clinic",
    industry: "Healthcare · Dental clinic",
    location: { city: "Rajkot", country: "India" },
    projectType: "Live business website",
    summary:
      "A website for a multi-specialty dental clinic in Rajkot, built around a quick appointment request with treatment, dentist, date and time-slot selection.",
    services: ["UI design", "Frontend development", "Appointment booking flow", "Local SEO structure"],
    featured: true,
    overview:
      "Aarshdeep Dental Clinic is a multi-specialty dental clinic on Raiya Road, Rajkot. The website presents the clinic's treatments and dentists, and lets patients request an appointment in a few steps — or reach the clinic directly by phone or WhatsApp.",
    goals: [
      "Let patients request an appointment without calling",
      "Explain each treatment in plain language",
      "Build trust with dentist profiles, facilities and hygiene standards",
      "Make phone and WhatsApp contact available from every screen",
    ],
    approach: [
      "An appointment form placed directly below the hero, with treatment, preferred dentist, date and available time slots.",
      "Nine treatment cards, each with its own 'Learn more' and 'Book appointment' actions.",
      "Floating WhatsApp and call buttons that stay visible on mobile.",
      "A page title and copy structured for local searches such as 'dentist in Rajkot'.",
    ],
    sections: [
      { name: "Hero", description: "Clinic positioning with Book Appointment, Call Now and WhatsApp buttons." },
      { name: "Appointment booking", description: "Treatment, dentist, date and time-slot selection." },
      { name: "About the clinic", description: "Care approach, sterilisation, technology and pricing transparency." },
      { name: "Treatments", description: "Nine treatments, from implants and root canals to kids dentistry." },
      { name: "Dentists", description: "Profiles with qualifications and areas of focus." },
      { name: "Smile gallery & facilities", description: "Clinic images, facilities, payment methods and insurance." },
      { name: "Patient journey", description: "Five steps from booking to follow-up." },
      { name: "FAQ & visit us", description: "Common questions, address, clinic hours and a second enquiry form." },
    ],
    features: [
      "Appointment request form with date and time-slot selection",
      "Treatment and preferred-dentist selection",
      "Call and WhatsApp buttons, including floating buttons on mobile",
      "Nine treatment cards with booking shortcuts",
      "Dentist profiles",
      "FAQ accordion",
      "Patient login entry point",
      "Responsive layout for phones, tablets and desktops",
    ],
    stack: [
      { label: "Frontend", items: ["React", "TanStack", "Tailwind CSS"] },
      { label: "Backend & data", items: ["Supabase"] },
      { label: "Build & hosting", items: ["Lovable"] },
    ],
    role: "Design and development",
    accent: "#DCEBFA",
    screenshots: [
      {
        publicId: `${screenshotRoot}/aarshdeep-dental-clinic/desktop-home`,
        device: "desktop",
        alt: "Aarshdeep Dental Clinic homepage with the heading 'Your Smile Deserves Expert Care' and booking buttons",
        caption: "Homepage hero with booking, call and WhatsApp actions",
      },
      {
        publicId: `${screenshotRoot}/aarshdeep-dental-clinic/desktop-booking`,
        device: "desktop",
        alt: "Appointment form with patient name, phone, treatment, preferred dentist, date and available slots",
        caption: "Appointment booking form",
      },
      {
        publicId: `${screenshotRoot}/aarshdeep-dental-clinic/desktop-treatments`,
        device: "desktop",
        alt: "Grid of dental treatment cards with Learn More and Book Appointment buttons",
        caption: "Treatments section",
      },
      {
        publicId: `${screenshotRoot}/aarshdeep-dental-clinic/desktop-dentists`,
        device: "desktop",
        alt: "Dentist profile cards with qualifications and experience",
        caption: "Dentist profiles",
      },
      {
        publicId: `${screenshotRoot}/aarshdeep-dental-clinic/mobile-home`,
        device: "mobile",
        alt: "Aarshdeep Dental Clinic homepage on a mobile phone",
        caption: "Mobile homepage",
      },
      {
        publicId: `${screenshotRoot}/aarshdeep-dental-clinic/mobile-booking`,
        device: "mobile",
        alt: "Appointment booking section on a mobile phone",
        caption: "Mobile booking form",
      },
    ],
    liveUrl: "https://patient-clinic-harmony.lovable.app/",
  },
  {
    kind: "website",
    slug: "hotel-bhabha",
    title: "Hotel Bhabha",
    businessName: "Hotel Bhabha",
    industry: "Hospitality · Hotel",
    location: { city: "Rajkot", country: "India" },
    projectType: "Live business website",
    summary:
      "A direct-booking website for a heritage hotel in Rajkot, with a room availability search, direct-booking offers, dining and nearby attractions.",
    services: ["UI design", "Frontend development", "Booking search flow", "Local SEO structure"],
    featured: true,
    overview:
      "Hotel Bhabha is a hotel on Panchnath Road, Rajkot, close to the railway station. The website presents its rooms, dining and location, and encourages guests to check availability and book directly rather than through travel portals.",
    goals: [
      "Encourage direct bookings instead of travel-portal bookings",
      "Let guests check availability from the first screen",
      "Show why the location is convenient for travellers",
      "Promote the in-house restaurant and banquet enquiries",
    ],
    approach: [
      "A check-in, check-out and guests search bar placed directly in the hero.",
      "A 'Better when you book direct' section with three direct-booking offers.",
      "A nearby section listing distances to the railway station, airport, bus station and landmarks.",
      "A dining section with meal times, table reservations and banquet enquiries.",
    ],
    sections: [
      { name: "Hero & availability search", description: "Check-in, check-out and guest selection with Book Now and Explore Rooms." },
      { name: "Rooms", description: "Room categories with daily servicing and 24-hour checkout." },
      { name: "Why choose us", description: "24-hour checkout, best direct rate, safety and local heritage." },
      { name: "Amenities", description: "Hotel facilities at a glance." },
      { name: "Nearby", description: "Distances to the station, airport, museums and bus station." },
      { name: "Special offers", description: "Direct-booking offers for longer stays, business and family trips." },
      { name: "Dining", description: "Gujarati cuisine, meal timings, table reservations and banquets." },
      { name: "Contact", description: "Address, reservations, email, front-desk timings, call and WhatsApp." },
    ],
    features: [
      "Availability search with check-in, check-out and guest count",
      "Direct-booking offers section",
      "Nearby attractions with distances and travel times",
      "Restaurant timings with table reservation and banquet enquiry actions",
      "Call and WhatsApp contact options",
      "Guest sign-in entry point",
      "Page title targeted at 'rooms near Rajkot railway station'",
      "Responsive layout for phones, tablets and desktops",
    ],
    stack: [
      { label: "Frontend", items: ["React", "TanStack", "Tailwind CSS"] },
      { label: "Backend & data", items: ["Supabase"] },
      { label: "Build & hosting", items: ["Lovable"] },
    ],
    role: "Design and development",
    accent: "#E9DCC3",
    screenshots: [
      {
        publicId: `${screenshotRoot}/hotel-bhabha/desktop-home`,
        device: "desktop",
        alt: "Hotel Bhabha homepage with a night photograph of the heritage building and a room availability search bar",
        caption: "Homepage hero with availability search",
      },
      {
        publicId: `${screenshotRoot}/hotel-bhabha/desktop-rooms`,
        device: "desktop",
        alt: "Rooms section titled 'Rooms designed for restful nights'",
        caption: "Rooms section",
      },
      {
        publicId: `${screenshotRoot}/hotel-bhabha/desktop-offers`,
        device: "desktop",
        alt: "Special offers section with three direct-booking offers",
        caption: "Direct-booking offers",
      },
      {
        publicId: `${screenshotRoot}/hotel-bhabha/desktop-dining`,
        device: "desktop",
        alt: "Dining section with meal timings and table reservation buttons",
        caption: "Dining section",
      },
      {
        publicId: `${screenshotRoot}/hotel-bhabha/mobile-home`,
        device: "mobile",
        alt: "Hotel Bhabha homepage on a mobile phone",
        caption: "Mobile homepage",
      },
      {
        publicId: `${screenshotRoot}/hotel-bhabha/mobile-offers`,
        device: "mobile",
        alt: "Special offers section on a mobile phone",
        caption: "Mobile offers section",
      },
    ],
    liveUrl: "https://hotelbhabha.lovable.app/",
  },
  {
    kind: "website",
    slug: "devam-event-studio",
    title: "Devam Event Studio",
    businessName: "Devam Event Studio",
    industry: "Events · Event planning",
    location: { country: "India" },
    projectType: "Live business website",
    summary:
      "A website for an event planning studio, with 31 services organised into filterable categories and quick enquiries by phone and WhatsApp.",
    services: ["UI design", "Frontend development", "Service catalogue", "Enquiry flow"],
    featured: true,
    overview:
      "Devam Event Studio plans weddings, corporate events, birthdays, baby showers, anniversaries and festival celebrations. The website presents the studio's story and team, and organises its full range of services so visitors can find the right one and enquire.",
    goals: [
      "Present a large range of services without overwhelming visitors",
      "Communicate a premium, elegant brand",
      "Make it easy to enquire about a specific service",
      "Keep phone and WhatsApp contact one tap away",
    ],
    approach: [
      "Services grouped into seven categories with filter buttons showing how many services each contains.",
      "Service cards with an 'Inquire' action and pricing information.",
      "A dark header with the phone number and a WhatsApp 'Chat Now' button always visible.",
      "Serif display typography and gold accents for an elegant feel.",
    ],
    sections: [
      { name: "Hero", description: "Brand statement and event types with a portfolio call to action." },
      { name: "About & timeline", description: "The studio's story and milestones." },
      { name: "Core values & team", description: "What drives the studio and who is behind it." },
      { name: "Testimonials", description: "Client reviews loaded into the page." },
      { name: "Services", description: "31 services in seven filterable categories." },
      { name: "Pricing, gallery & contact", description: "Packages, event photos and contact options." },
    ],
    features: [
      "Service category filters with counts",
      "Service cards with enquiry buttons",
      "Click-to-call phone number in the header",
      "WhatsApp 'Chat Now' button",
      "Company timeline",
      "Dynamically loaded reviews section",
      "Back-to-top button",
      "Responsive layout for phones, tablets and desktops",
    ],
    stack: [
      { label: "Frontend", items: ["React (Create React App)", "Font Awesome", "Google Fonts"] },
      { label: "Hosting", items: ["Render"] },
    ],
    role: "Design and development",
    accent: "#EADBC0",
    screenshots: [
      {
        publicId: `${screenshotRoot}/devam-event-studio/desktop-home`,
        device: "desktop",
        alt: "Devam Event Studio homepage with a full-width event photograph and the heading 'Crafting Unforgettable Moments of Elegance'",
        caption: "Homepage hero",
      },
      {
        publicId: `${screenshotRoot}/devam-event-studio/desktop-services`,
        device: "desktop",
        alt: "Services section with category filter buttons and service category cards",
        caption: "Services with category filters",
      },
      {
        publicId: `${screenshotRoot}/devam-event-studio/desktop-about`,
        device: "desktop",
        alt: "About section of the Devam Event Studio website",
        caption: "About section",
      },
      {
        publicId: `${screenshotRoot}/devam-event-studio/desktop-timeline`,
        device: "desktop",
        alt: "Company timeline section of the Devam Event Studio website",
        caption: "Company timeline",
      },
      {
        publicId: `${screenshotRoot}/devam-event-studio/mobile-home`,
        device: "mobile",
        alt: "Devam Event Studio homepage on a mobile phone",
        caption: "Mobile homepage",
      },
      {
        publicId: `${screenshotRoot}/devam-event-studio/mobile-services`,
        device: "mobile",
        alt: "Services section on a mobile phone",
        caption: "Mobile services section",
      },
    ],
    liveUrl: "https://devamevent.onrender.com/",
    sourceUrl: "https://github.com/Kalathiyautsav0001/DevamEvent",
  },
];

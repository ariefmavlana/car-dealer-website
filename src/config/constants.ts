import { routes } from "./routes";

export const imageSources = {
  classifiedPlaceholder: "https://mavlana-motors.s3.ap-southeast-1.amazonaws.com/uploads/classified-placeholder.jpeg",
	carLinup: "https://mavlana-motors.s3.ap-southeast-1.amazonaws.com/car-lineup.jpeg",
	featureSection: "https://mavlana-motors.s3.ap-southeast-1.amazonaws.com/feature-section.jpeg",
}

export const CLASSIFIEDS_PER_PAGE = 4

export const navLinks = [
	{ id: 1, href: routes.home, label: "Home" },
	{ id: 2, href: routes.inventory, label: "Inventory" },
];
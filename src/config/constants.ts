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

export const SESSION_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days in seconds
export const MAX_IMAGE_SIZE = 20 * 1000 * 1000; // 2mb
export const MAX_IMAGES = 20;
export const sortOrder = ["asc", "desc"] as const;
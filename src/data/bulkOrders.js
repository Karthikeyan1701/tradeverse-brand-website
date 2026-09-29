import {
  PackageSearch,
  Boxes,
  ClipboardCheck,
  Package,
  MapPin,
  Tags,
} from "lucide-react";

const bulkOrderRequirements = [
  {
    id: 1,
    number: "01",
    title: "Product",
    description:
      "Tell us the food product you are looking to source from India.",
    icon: PackageSearch,
  },
  {
    id: 2,
    number: "02",
    title: "Quantity",
    description:
      "Share your required quantity, order volume and expected supply frequency.",
    icon: Boxes,
  },
  {
    id: 3,
    number: "03",
    title: "Specifications",
    description:
      "Provide grade, quality, size, variety and other product specifications.",
    icon: ClipboardCheck,
  },
  {
    id: 4,
    number: "04",
    title: "Packaging",
    description:
      "Specify your preferred packaging format, weight and labeling requirements.",
    icon: Package,
  },
  {
    id: 5,
    number: "05",
    title: "Destination",
    description:
      "Tell us the destination country, port or delivery location for your shipment.",
    icon: MapPin,
  },
  {
    id: 6,
    number: "06",
    title: "Private Label",
    description:
      "Discuss customized packaging and private-label requirements where applicable.",
    icon: Tags,
  },
];

const bulkOrderBenefits = [
  "Bulk commercial quantities",
  "Buyer-specific specifications",
  "Customized packaging",
  "Private-label requirements",
  "Regular supply arrangements",
];

export { bulkOrderRequirements, bulkOrderBenefits };
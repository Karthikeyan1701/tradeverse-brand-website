import {
  Handshake,
  ClipboardCheck,
  FileCheck,
  PackageCheck,
  ScanSearch,
  Truck,
} from "lucide-react";

const qualityPractices = [
  {
    id: 1,
    number: "01",
    title: "Supplier Coordination",
    description:
      "We coordinate with selected suppliers to understand product availability, specifications and sourcing requirements.",
    icon: Handshake,
  },
  {
    id: 2,
    number: "02",
    title: "Product Specifications",
    description:
      "Product specifications are reviewed according to buyer requirements, including grade, quantity, packaging and other agreed parameters.",
    icon: ClipboardCheck,
  },
  {
    id: 3,
    number: "03",
    title: "Quality Documentation",
    description:
      "Relevant quality and product documentation is coordinated based on the product, buyer requirements and applicable trade requirements.",
    icon: FileCheck,
  },
  {
    id: 4,
    number: "04",
    title: "Packaging & Handling",
    description:
      "Packaging and handling requirements are coordinated to help maintain product quality throughout the export process.",
    icon: PackageCheck,
  },
  {
    id: 5,
    number: "05",
    title: "Traceability",
    description:
      "Batch or lot information is maintained where applicable to support product identification and shipment coordination.",
    icon: ScanSearch,
  },
  {
    id: 6,
    number: "06",
    title: "Pre-Shipment Coordination",
    description:
      "Before shipment, product, packaging, documentation and logistics requirements are coordinated with the relevant parties.",
    icon: Truck,
  },
];

export default qualityPractices;
const contactInfo = {
  companyName: "TRADEVERSE IMPORT & EXPORTS",
  location: "India",
  phone: "+91 7200270565",
  email: "",
  website: "",
};

const contactFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "company",
    label: "Company Name",
    type: "text",
    placeholder: "Your company name",
    required: true,
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    placeholder: "Your country",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true,
  },
  {
    id: "phone",
    label: "WhatsApp / Phone",
    type: "tel",
    placeholder: "+Country Code",
    required: true,
  },
  {
    id: "product",
    label: "Product Required",
    type: "text",
    placeholder: "e.g. Black Pepper",
    required: true,
  },
  {
    id: "quantity",
    label: "Quantity Required",
    type: "text",
    placeholder: "e.g. 5 MT",
    required: true,
  },
  {
    id: "destination",
    label: "Destination Port",
    type: "text",
    placeholder: "e.g. London Gateway",
    required: true,
  },
];

export { contactInfo, contactFields };
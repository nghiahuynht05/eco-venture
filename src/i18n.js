import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import vi from "./locales/vi.json";

i18n.use(initReactI18next).init({
  resources: {
    EN: { translation: en },
    VI: { translation: vi },
  },
  lng: "EN", // Ngôn ngữ mặc định
  fallbackLng: "EN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

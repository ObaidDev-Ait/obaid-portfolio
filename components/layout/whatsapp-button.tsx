"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function WhatsAppButton() {
  if (!personalInfo.phone) return null;

  // Format phone number to contain only digits (e.g., +212 600-000000 -> 212600000000)
  const formattedPhone = personalInfo.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${formattedPhone}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
      >
        {/* Pulsing Backlight Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.638-1.024-5.117-2.884-6.979C16.578 1.898 14.1 .87 11.465.87 6.03.87 1.61 5.288 1.606 10.729c-.001 1.73.453 3.42 1.317 4.921l-.994 3.633 3.718-.975zm11.233-5.26c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.028-.514-1.815-1.094-2.54-2.348-.194-.336-.05-.517.1-.667.135-.135.3-.35.45-.525.076-.088.132-.167.18-.233.15-.3.075-.562-.038-.787-.112-.225-.975-2.35-1.338-3.225-.353-.85-.71-.734-.975-.75-.25-.013-.538-.014-.825-.014-.287 0-.756.108-1.15.538-.394.43-1.502 1.468-1.502 3.58s1.538 4.156 1.75 4.45c.213.294 3.025 4.622 7.331 6.486 1.025.443 1.825.707 2.443.904 1.031.328 1.968.281 2.706.172.825-.122 1.78-.727 2.03-1.393.25-.667.25-1.238.175-1.393-.075-.15-.275-.225-.575-.375z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none">
          Discuter sur WhatsApp
        </span>
      </a>
    </motion.div>
  );
}

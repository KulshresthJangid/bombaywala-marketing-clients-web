import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../../lib/config";

const STORAGE_KEY = "sas-disclaimer-accepted";
const EASE = [0.22, 1, 0.36, 1] as const;

// Bar Council of India rules (Rule 36) prohibit advocates from soliciting
// work or advertising. This gate records that the visitor sought out the
// firm's information voluntarily before any content is shown.
export default function DisclaimerGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage unavailable (private browsing, etc.) — proceed anyway
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="disclaimer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-navy-dark/92 backdrop-blur-sm px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="panel gold-border-top w-full max-w-lg max-h-[85vh] overflow-y-auto p-8 sm:p-10"
          >
            <p className="overline">Disclaimer</p>
            <h2 id="disclaimer-title" className="mt-4 text-2xl text-navy">
              Bar Council of India Rules
            </h2>

            <div className="mt-5 space-y-4 text-sm text-muted leading-relaxed">
              <p>
                The rules of the Bar Council of India do not permit
                advocates to solicit work or advertise. By clicking{" "}
                <strong className="text-navy">"I Agree"</strong> below, you
                acknowledge and confirm that:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  There has been no advertisement, personal communication,
                  solicitation, invitation or inducement of any sort
                  whatsoever from {siteConfig.brandName} or any of its
                  members to solicit any work through this website;
                </li>
                <li>
                  You wish to gain more information about{" "}
                  {siteConfig.brandName} for your own information and use;
                </li>
                <li>
                  All information on this website is provided for general
                  informational purposes only, and should not be
                  interpreted as soliciting or advertisement, nor
                  construed as legal advice; and
                </li>
                <li>
                  {siteConfig.brandName} is not liable for any consequence
                  of any action taken relying on material or information
                  provided on this website.
                </li>
              </ul>
              <p>
                Any transmission, receipt or use of this website does not
                constitute or create a lawyer-client relationship.
              </p>
            </div>

            <button
              onClick={accept}
              className="btn btn-gold w-full justify-center mt-8"
            >
              I Agree
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

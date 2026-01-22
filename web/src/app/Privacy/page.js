"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Privacy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center px-6 py-16"
    >
      <div className="max-w-3xl w-full space-y-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extralight text-left"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-300 text-lg leading-relaxed text-left"
        >
          At Helí Suárez, we value your privacy and are committed to protecting
          your personal data. This policy explains how we collect, use, store,
          and protect the information you provide through our contact form and
          other services on this website.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Data Collected */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Data Collected
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              When you use the contact form, we may collect the following
              information:
            </p>
            <ul className="list-disc list-inside text-neutral-300">
              <li>Full name</li>
              <li>Email address</li>
              <li>Message or inquiry you send</li>
              <li>
                Technical data such as IP address and browser, only for security
                purposes
              </li>
            </ul>
          </div>

          {/* Use of Information */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Use of Information
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              The information collected is used exclusively for:
            </p>
            <ul className="list-disc list-inside text-neutral-300">
              <li>
                Responding to your inquiries submitted through the contact form
              </li>
              <li>Improving our services and communication</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed text-left">
              We do not share your data with third parties unless required by
              law.
            </p>
          </div>

          {/* Third-Party Content (YouTube) */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Third-Party Content
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              Some videos on this website are played through YouTube. Although
              we use YouTube’s “nocookie” mode to minimize data collection,
              playing these videos may still result in cookies being set or
              information being collected according to the
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                className="text-blue-400 underline"
              >
                {" "}
                YouTube/Google Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Storage and Security */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Storage and Security
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              Your data is securely stored in our systems, and technical and
              organizational measures are in place to protect it from
              unauthorized access, loss, or disclosure.
            </p>
          </div>

          {/* User Rights */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              User Rights
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              You can exercise your rights of access, rectification,
              cancellation, and objection (ARCO) at any time by sending an email
              to
              <a
                href="mailto:heli.suarez@outlook.com"
                className="text-blue-400 underline"
              >
                {" "}
                heli.suarez@outlook.com
              </a>
              .
            </p>
          </div>

          {/* Legal Basis */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Legal Basis
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              This policy complies with the Spanish Organic Data Protection Law
              (LOPDGDD) and the European General Data Protection Regulation
              (GDPR).
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-6"
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-neutral-800 rounded-md text-neutral-200 hover:bg-neutral-700 transition font-medium"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}

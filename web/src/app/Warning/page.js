"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Warning() {
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
          Legal Notice
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-300 text-lg leading-relaxed text-left"
        >
          Welcome to Helí Suárez’s website. By using this website, you accept
          the terms and conditions set forth here.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Owner Information */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Owner Information
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              Helí Suárez – Spain – Email:
              <a
                href="mailto:heli.suarez@outlook.com"
                className="text-blue-400 underline"
              >
                {" "}
                heli.suarez@outlook.com
              </a>
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Intellectual Property
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              All content on this website, including text, images, design, and
              source code, is the property of Helí Suárez and may not be
              reproduced, distributed, or modified without express permission.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Disclaimer
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              Helí Suárez is not responsible for errors, omissions, or outcomes
              derived from the use of this website, including third-party links.
              Use of the information is at the user’s own risk.
            </p>
          </div>

          {/* Terms of Use */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-left">
              Terms of Use
            </h2>
            <p className="text-neutral-300 leading-relaxed text-left">
              Use of the website for illegal, offensive, or rights-infringing
              purposes is prohibited. Accessing and browsing this site implies
              acceptance of these terms.
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

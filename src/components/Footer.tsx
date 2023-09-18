"use client";

import React from "react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 font-medium sm:text-center">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/jorge-andradesouza/"
            className="hover:underline"
          >
            Jorge luiz
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/jorge-andradesouza/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JorgeluizAndrade"
              className="mr-4 hover:underline md:mr-6"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";


const Breadcrumb = ({ navTab }) => {
  return (
    <nav className="md:flex pl-2 my-28 hidden " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {navTab.map((tab, tabIndex) =>
          tab.tabName == "Home" ? (
            <li key={tabIndex} className="inline-flex items-center">
              <Link
                href={tab.url}
                className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-orange-400 "
              >
                <svg
                  className="w-3 h-3 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                {tab.tabName}
              </Link>
            </li>
          ) : (
            <li key={tabIndex}>
              <div className="flex items-center hover:text-orange-400">
                <svg
                  className="w-3 h-3 text-black mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href={tab.url}
                  className="ml-1 text-sm font-medium text-slate-700 md:ml-2 "
                >
                  {tab.tabName}
                </Link>
              </div>
            </li>
          )
        )}
        
      </ol>
    </nav>
  );
};

export default Breadcrumb;

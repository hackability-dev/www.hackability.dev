import React from "react"
import { Link } from "gatsby"

export const Header = () => (
  <div className="relative bg-white">
    <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link to="/">
          <span className="sr-only">Workflow</span>
          <img
            className="h-8 w-auto sm:h-10"
            src="/logo-full.png"
            alt="Hackability Logo"
          />
        </Link>
      </div>
    </div>
  </div>
)

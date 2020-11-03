import React from "react";

export default function WyaAppBar() {
  return (
    <div>
      <ul className="flex">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href={"/#"}>
            Home
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/#">
            About
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/#">
            Link
          </a>
        </li>
      </ul>
    </div>
  );
}

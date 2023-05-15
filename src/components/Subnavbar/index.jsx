import React from 'react'
import { Link } from "react-router-dom";

import './styles.scss'

const Subnavbar = () => {
  return (
    <>
      <div className="subnavbar">
        <ul className="navitem">
          <li>
            <Link href="#Movies">Movies</Link>
          </li>
          <li>
            <Link href="#Movies">
              Stream<span>NEW</span>
            </Link>
          </li>
          <li>
            <Link href="#Movies">Events</Link>
          </li>
          <li>
            <Link href="#Movies">Plays</Link>
          </li>
          <li>
            <Link href="#Movies">Sports</Link>
          </li>
          <li>
            <Link href="#Movies">Activities</Link>
          </li>
          <li>
            <Link href="#Movies">Buzz</Link>
          </li>
        </ul>
        <ul className="navitem1">
          <li>
            <Link href="#Movies">
              ListYourShow<span>NEW</span>
            </Link>
          </li>
          <li>
            <Link href="#Movies">Corporates</Link>
          </li>
          <li>
            <Link href="#Movies">Offers</Link>
          </li>
          <li>
            <Link href="#Movies">Gift Cards</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Subnavbar
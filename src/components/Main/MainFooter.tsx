import React from 'react';
import {
  faGithub,
  faPinterest,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainFooter() {
  return (
    <div className="md:hidden flex flex-col bg-white items-center p-10">
      <h1 className="font-bold tracking-widest mb-6 font-sans">
        Want to hear more?
      </h1>
      <p className="text-piotrf-text-gray text-sm text-center mb-6">
        For business enquiries or casual chatter about design, development,
        startup life, remote work, digital nomadism and what not—do drop me a
        line. I love emails.
      </p>
      <hr />
      <a className="font-bold underline font-mono">EMAIL JH3618@GMAIL.COM</a>
      <hr />
      <ul className="flex flex-row flex-wrap mt-4">
        {[faGithub, faPinterest, faTwitter, faInstagram, faLinkedin].map(
          iconName => (
            <li className="mr-4">
              <FontAwesomeIcon icon={iconName} size="sm" />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MainFooter;

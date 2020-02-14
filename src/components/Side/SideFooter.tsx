import React from 'react';
import {
  faGithub,
  faPinterest,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideFooter() {
  return (
    <div>
      <p className="text-sm text-piotrf-text-gray">
        For business enquiries or casual chatter—do drop me a line at
        jh3618@gmail.com
      </p>
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

export default SideFooter;

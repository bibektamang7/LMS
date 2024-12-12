import Image from "next/image";
import Link from "next/link";
import React from "react";

const InstructorCard = ({
  avatar,
  name,
  bio,
  expertise,
}: {
  avatar: string;
  name: string;
  bio: string;
  expertise: string[];
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center px-6 py-4">
        <Image
          className="w-24 h-24 rounded-full object-cover"
          src={avatar}
          alt={name}
          loading="lazy"
          width={40}
          height={40}
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 line-clamp-4">{bio}</p>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <h3 className="text-gray-700 font-semibold mb-2">Expertise</h3>
        <ul className="flex flex-wrap">
          {expertise.map((skill: string, index: number) => (
            <li
              key={index}
              className="bg-indigo-600 text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        {/* <div className="flex space-x-3">
                {mentor.socialLinks.linkedin && (
                  <a
                    href={mentor.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.439c0-3.065-3-2.831-3 0v5.439h-3v-10h3v1.355c1.396-2.586 7-2.777 7 2.476v6.169z" />
                    </svg>
                  </a>
                )}
                {mentor.socialLinks.twitter && (
                  <a
                    href={mentor.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.194-.897-.955-2.178-1.55-3.594-1.55-2.717 0-4.917 2.2-4.917 4.917 0 .385.043.76.127 1.118-4.083-.205-7.702-2.16-10.126-5.134-.423.725-.666 1.567-.666 2.465 0 1.701.866 3.2 2.181 4.078-.805-.026-1.562-.247-2.228-.616v.062c0 2.377 1.691 4.358 3.935 4.81-.412.112-.847.171-1.294.171-.317 0-.626-.031-.929-.088.627 1.956 2.445 3.379 4.6 3.418-1.68 1.316-3.801 2.101-6.102 2.101-.396 0-.787-.023-1.175-.069 2.179 1.396 4.768 2.21 7.557 2.21 9.054 0 14.009-7.5 14.009-14.009 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.462-2.549z" />
                    </svg>
                  </a>
                )}
                {mentor.socialLinks.github && (
                  <a
                    href={mentor.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.469-2.382 1.236-3.221-.124-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.021.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.839 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.475 5.921.43.37.815 1.102.815 2.222v3.293c0 .321.217.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div> */}
        <Link
          href="/"
          className="opacity-100 text-white hover:bg-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg w-full sm:!w-[200px] bg-indigo-700"
        >
          Contact Mentor
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;

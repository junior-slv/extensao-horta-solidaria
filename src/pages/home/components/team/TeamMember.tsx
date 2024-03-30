import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

interface TeamMemberProps {
  name: string
  role: string
  description: string
  avatarSrc: string
  githubLink?: string
  InstagramLink?: string
  LinkedinLink?: string
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  avatarSrc,
  githubLink,
  InstagramLink,
  LinkedinLink
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 text-center shadow-md">
      <a href="#">
        <img
          className="mt-6 max-h-32 w-full rounded-full"
          src={avatarSrc}
          alt={name + ' Avatar'}
        />
      </a>
      <div className="p-4">
        <h3 className="text-lg font-bold tracking-tight text-gray-900">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500">{role}</span>
        <p className="mb-4 mt-2 font-light text-gray-500">{description}</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a
              href={githubLink}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="size-5" />
            </a>
          </li>
          <li>
            <a
              href={LinkedinLink}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="size-5" />
            </a>
          </li>
          <li>
            <a
              href={InstagramLink}
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="size-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamMember

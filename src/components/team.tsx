import { FC } from "react"
import Image from "gatsby-image"

export interface TeamMember {
  nick: string
  name: string
  bio: string
  twitter?: string
  linkedin?: string
  youtube?: string
  site?: string
  image: {
    childImageSharp: {
      fixed: any
    }
  }
}

export interface TeamProps {
  members: TeamMember[]
  title?: string
  subtitle?: string
}

export const Team: FC<TeamProps> = ({
  members,
  title = "Tutti i partecipanti",
  subtitle = "Incontra le persone che hanno partecipato al progetto.",
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-xl text-gray-500">{subtitle}</p>
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {members.map(member => (
              <li key={member.nick}>
                <TeamMember member={member} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const TeamMember: FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="space-y-6">
      <Image
        fixed={member.image.childImageSharp.fixed}
        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
        alt={member.name}
      />
      <div className="space-y-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3>{member.name}</h3>
          <p className="text-indigo-600">{member.bio}</p>
        </div>
        <ul className="flex justify-center space-x-5">
          {member.twitter && (
            <li>
              <a
                href={`https://twitter.com/${member.twitter}`}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </a>
            </li>
          )}
          {member.linkedin && (
            <li>
              <a
                target="_blank"
                href={`https://www.linkedin.com/in/${member.linkedin}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon />
              </a>
            </li>
          )}
          {member.youtube && (
            <li>
              <a
                target="_blank"
                href={`https://www.youtube.com/c/${member.youtube}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <YouTubeIcon />
              </a>
            </li>
          )}
          {member.site && (
            <li>
              <a
                target="_blank"
                href={member.site}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{member.name}</span>
                <SiteIcon />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const TwitterIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    ></path>
  </svg>
)

const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 448 512"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    ></path>
  </svg>
)

const YouTubeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 576 512"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
    ></path>
  </svg>
)

const SiteIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
    ></path>
  </svg>
)

import { FC, useEffect, useState } from "react"
import Image from "gatsby-image"
import dateformat from "dateformat"
import { Link } from "gatsby"

export interface Event {
  id: string
  body: string
  slug: string
  frontmatter: {
    description: string
    date: Date
    title: string
    youtube: string
    featureImage: {
      childImageSharp: {
        fluid: any
      }
    }
    guests: {
      id: string
      name: string
      image: {
        childImageSharp: {
          fixed: any
        }
      }
    }[]
  }
}

export interface EventsProps {
  events: Event[]
}

export const Events: FC<EventsProps> = ({ events }) => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Tutti gli eventi
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Scopri i prossimi eventi e riguarda quelli passati
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {events.map(event => (
            <Event event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Event: FC<{ event: Event }> = ({ event }) => {
  const date = new Date(event.frontmatter.date)
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          className="w-full"
          fluid={event.frontmatter.featureImage.childImageSharp.fluid}
          alt={event.frontmatter.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <EventDate date={date} />
          <div className="mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {event.frontmatter.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {event.frontmatter.description}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center mx-1">
          {event.frontmatter.guests.map(guest => (
            <div className="flex-shrink-0" key={guest.id}>
              <Image
                className="h-10 w-10 rounded-full -mx-1 border-2 border-white"
                fixed={guest.image.childImageSharp.fixed}
                alt={guest.name}
              />
            </div>
          ))}
          <div className="flex-grow"></div>
          <Link
            to={`/events/${event.slug}`}
            target="_blank"
            className="bg-green-500 px-3 py-2 text-sm font-bold text-white rounded hover:bg-green-700"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  )
}

const EventDate: FC<{ date: Date }> = ({ date }) => {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    function getNow() {
      setTimeout(() => {
        setNow(new Date()), getNow()
      }, 60 * 1000)
    }
    getNow()
  }, [])

  if (now.getTime() > date.getTime() + 2 * 60 * 60 * 1000) {
    return (
      <p className="text-sm font-medium text-green-600">
        <span>Evento passato</span>
      </p>
    )
  }

  if (now.getTime() > date.getTime()) {
    return (
      <p className="text-sm font-medium text-red-600">
        <span>Live in Corso</span>
      </p>
    )
  }

  if (now.getTime() < date.getTime() - 2 * 60 * 60 * 1000) {
    return (
      <p className="text-sm font-medium text-indigo-600">
        <span>
          Programmato il {dateformat(date, 'dd/mm/yyyy  "alle" HH:MM')}
        </span>
      </p>
    )
  }

  if (now.getTime() < date.getTime() - 2 * 60 * 1000) {
    return (
      <p className="text-sm font-medium text-red-600">
        Live tra {Math.trunc((date.getTime() - now.getTime()) / 1000 / 60)}{" "}
        minuti
      </p>
    )
  }

  return (
    <p className="text-sm font-medium text-red-600">
      <span>Live tra pochi secondi</span>
    </p>
  )
}

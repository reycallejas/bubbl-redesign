import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import hero from './assets/hero.png'
import avatar from './assets/avatar.png'
import poster from './assets/poster.png'
import eventOne from './assets/event-baugruppe.png'
import eventTwo from './assets/event-pura-vida.png'
import eventThree from './assets/event-gamall.png'
import eventFour from './assets/event-baum.png'
import eventFive from './assets/event-tico.png'
import eventSix from './assets/image.png'
import eventSeven from './assets/eventseven.png'
import insta from './assets/insta.png'
import verified from './assets/image-7.png'
import link from './assets/link.png'
import pin from './assets/pin.png'
import pinwhite from './assets/pinwhite.png'

const Pin = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.02 7-12a7 7 0 1 0-14 0c0 6.98 7 12 7 12Zm0-8.5A3.5 3.5 0 1 0 12 5a3.5 3.5 0 0 0 0 7.5Z" /></svg>
const Menu = () => <span className="menu" aria-label="Open menu"><i /><i /><i /></span>

function ProfileName({ name }) {
  const words = name.trim().split(/\s+/).filter(Boolean)
  const lastWord = words.pop() ?? ''
  const leading = words.join(' ')

  return (
    <h1>
      {leading && <>{leading}{' '}</>}
      <span className="title-end">
        {lastWord}{' '}
        <span className="verified"><img src={verified} alt="" /></span>
      </span>
    </h1>
  )
}

function Profile() {
  const profileName = 'Radio Estrella'
  const [following, setFollowing] = useState(false)
  return <main className="screen profile">
    <section className="hero">
      <img src={hero} alt="Concert crowd" />
      <div className="hero-shade" />
      <header>
        <button className="icon-button"><Menu /></button>
        <strong className="brand">BUBBL</strong>
        <button className="login">Log In</button>
      </header>
    </section>

    <section className="identity">
      <img className="avatar" src={avatar} alt={profileName} />
      <ProfileName name={profileName} />
      <p className="place">Bogotá, Colombia <span className="handle"><img src={insta} alt="" />radioestrella.bog</span></p>
      <div className="follow-row"><span><b>9566</b> followers</span><button onClick={() => setFollowing(!following)} className={following ? 'follow active' : 'follow'}>{following ? 'Following' : 'Follow'}</button></div>
      <p className="link"><img src={link} alt="" />www.radioestrella.com</p>
      <p className="bio">Horario: Vie - Sab. 10 pm - 5 am <br/>Carrera 15 # 99-23, Bogota </p>
    </section>

    <section className="upcoming">
      <div className="rule" />
      <h2>Upcoming Event</h2>
      <img className="poster" src={poster} alt="Pilita Project event poster" />
      <h3>Inside: Stay Nasty | 24.07</h3>
      <p className="venue"><img src={pinwhite} alt="" />Radio Estrella<small>Bogotá</small></p>
      <button className="tickets">BUY TICKETS</button>
    </section>
    <Events />
  </main>
}

const events = [
  { image: eventOne, title: 'BAUGRUPPE90 At Radio Estrella', date: 'July 25, 9:00 PM', venue: 'Radio Estrella' },
  { image: eventTwo, title: 'Pura Vida | 31.07', date: 'July 31, 9:00 PM', venue: 'Radio Estrella' },
]

const pastEvents = [
  { image: eventThree, title: 'Gamall | 19.07', ago: '3d ago' },
  { image: eventFour, title: 'Baum Showcase | 18.07', ago: '3d ago' },
  { image: eventFive, title: 'HYPERPOP x UNRLSD | 17.07', ago: '4d ago' },
  { image: eventSix, title: 'Música Bailable | 11.07', ago: '11d ago' },
  { image: eventSeven, title: 'Ross Takeover | 10.07', ago: '12d ago' },
]

function Events() {
  return <section className="events">
    <header className="page-head"><h1>More Events</h1></header>
    <section className="event-list">
      {events.map(({ image, title, date, venue }) => <article className="event-row" key={title}>
        <img src={image} alt="" />
        <div><h2>{title}</h2><p>{date}</p><span><img src={pin} alt="" id="pin" /> {venue}</span></div><b className="chevron">›</b>
      </article>)}
      <button className="tickets wide">BECOME A MEMBER</button>
    </section>
    <section className="past">
      <h2>Past Events</h2>
      <div className="past-carousel">
        {pastEvents.map(({ image, title, ago }) => (
          <article key={title}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{ago}</p>
          </article>
        ))}
      </div>
    </section>
  </section>
}

function App() {
  return <div className="app"><div className="phone"><Profile /></div></div>
}

createRoot(document.getElementById('root')).render(<App />)

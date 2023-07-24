import AppointmentList from "../components/AppointmentList"
import Teachers from "../components/Teachers"
import { appointmentData } from "../helper/data"
import { useState } from "react"

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData)

  console.log(appointments)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">ÖZEL DERS RANDEVU </h1>
      <Teachers apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  )
}

export default Home

import { services } from "../constants"
import ServiceCart from '../components/ServiceCart'

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center items-center max-container gap-10">
      {
        services.map((service) => (
          <ServiceCart {...service}/>
        ))
      }
    </section>
  )
}

export default Services

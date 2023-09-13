import { CalendarIcon, DocumentTextIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Task Management',
    description:
      'Assign tasks to yourself or other medical professionals for efficient patient care coordination.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Patient Information',
    description:
      'Access up-to-date patient profiles, medical history, and treatment plans to deliver personalized care.',
    icon: UserIcon,
  },
  {
    name: 'Appointment Management',
    description:
      'Manage appointments, set reminders, and maintain a smooth scheduling process.',
    icon: CalendarIcon,
  },
  {
    name: 'Secure Communication',
    description:
      'Communicate securely with patients, caregivers, and colleagues to ensure seamless collaboration.',
    icon:  LockClosedIcon,
  },
]

function Services() {
  return (
    <div className="bg-white pb-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Welcome to a world of proactive healthcare management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          With MediGuard taking care of your health has never been easier.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Services;
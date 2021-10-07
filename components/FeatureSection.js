/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'International Websites',
    description:
      'Do you want to have an international store? We can build your store to be International',
    icon: GlobeAltIcon,
  },
  {
    name: 'SEO',
    description:
      'Having a webiste is the first step, optmizing it will ensure your success, start with SEO so you can promote and reach more clients in an organic way',
    icon: ScaleIcon,
  },
  {
    name: 'Fast Websites',
    description:
      'Get incredible fast websites, which will help the user experience for your users, and have more sales',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile Responsive',
    description:
      'Have and amazing experience both Web and Mobile version, so your clients can see your products in the expected way.',
    icon: AnnotationIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Boost your online store</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build Ecommerce Websites
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get amazing features with modern technologies.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

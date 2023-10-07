import { FeatureTitle } from '@/components/feature';
import { Card1, Card2, Card3, Card4, Featurecard } from '@/components/featureCard';
import Image from 'next/image'


const features = [
  { title: "The Secret Garden", id: "1", card: Card1 },
  { title: "The Great Gatsby", id: "2", card: Card2 },
  { title: "To Kill a Mockingbird", id: "3", card: Card3 },
  { title: "The Lord of the Rings", id: "4" , card: Card4},
];


export default function Home() {
  return (
    <div className='mx-auto max-w-6xl px-4'>
        <div className="flex w-full gap-20 items-start">
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id} 
                className="py-16 font-heading text-5xl text-gray-300">
                  <FeatureTitle id={feature.id}>

                  {feature.title}
                  </FeatureTitle>
                  </li>
              ))}
            </ul>
          </div>
          <div className="w-full sticky top-0  flex h-screen items-center">
            <div className="relative w-full aspect-square ">
             {
              features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))
             }
          
            </div>
          </div>
        </div>

        <div className="h-screen">
          More rool to scrool
        </div>
    </div>
  )
}

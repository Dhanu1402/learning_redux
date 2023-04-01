import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        alt="logo"
        objectFit="contain"
      />
      <div className="col-span-3 mx-3">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="isprime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button">Add to Basket</button>
        <button className="button">Remove from Basket</button>
      </div>
    </div>
  );
}

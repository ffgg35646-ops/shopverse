import {
  Star
} from "lucide-react";


interface RatingProps {

  value: number;

  count?: number;

  size?: number;

}



const Rating = ({
  value,
  count,
  size = 18
}: RatingProps) => {


  const stars = Array.from(
    {
      length: 5
    },
    (_, index) => index + 1
  );


  return (

    <div className="flex items-center gap-2">


      <div className="flex">

        {stars.map(
          (star) => (

            <Star

              key={star}

              size={size}

              className={

                star <= value

                  ? "fill-yellow-400 text-yellow-400"

                  : "text-gray-300"

              }

            />

          )
        )}

      </div>


      {count !== undefined && (

        <span className="text-sm text-gray-500">

          ({count})

        </span>

      )}


    </div>

  );

};


export default Rating;

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function HorizontalCard5() {
    return (
      <Card className="w-full    flex justify-center mx-auto flex-row m-auto max-w-[1360px]">
       
        <CardBody className="p-28 h-[596px] flex justify-center flex-col">
          <Typography variant="h6" color="" className="mb-4 font-bold text-blue-600 uppercas">
            Digitalize Your Cash
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam deleniti, doloriam blanditiis.
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center text-blue-600 gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
         <CardHeader
          shadow={false}
          floated={false}
          className="  m-0 w-[50%] shrink-0  "
        >
          <img
            src="../public/wallet-3950973_1280.jpg"
            alt="card-image"
            className="  card-image h-full object-cover rounded-3xl " 
          />
        </CardHeader>
      </Card>
    );
  }
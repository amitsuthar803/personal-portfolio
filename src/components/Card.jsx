import { useState } from "react";
import Modal from "./Modal";

function Card() {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      id: 1,
      title: "piggyminibank",
      URL: "https://piggyminibank.netlify.app/",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],

      description:
        "Bank webapp prototype using html, css, javascript, tailwind css. app features include all transaction, money transfer, request for loan, sort and filter method on transaction, user can close their account",
    },
    {
      id: 2,
      title: "HeavenHome",
      URL: "https://heavenhome.netlify.app/",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "An stunning web application for the hotel team. You can insert/update/delete cabins, delete/update bookings,create new users, update your account, Technologies include React Query, Styled Components,ReactHook Form, Supabase, compound component pattern, authentication, charts dark mode",
    },
    {
      id: 3,
      title: "PharmaFriend",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "A pharmacy point of sale and management system web application to manage medical store supplies, demand,and sales, Technologies include React, tailwind css, Redux, Context Api,Node.js, mySQL",
    },
    {
      id: 4,
      title: "what2watch",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "What2Watch is a React-based web application where users can explore movies, view detailed information about them, add them to their watching list, and rate them.",
    },
    {
      id: 5,
      title: "React Quiz",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "React Quiz App is a simple web application built with React.js where users can take quizzes on React.",
    },
    {
      id: 6,
      title: "Pizza order app",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "React Pizza Order App is a prototype web application built with React.js for ordering pizzas online. Users can customize their pizza orders and submit them for delivery or pickup.",
    },
    // {
    //   id: 7,
    //   title: "web App",
    //   image: [
    //     "./port-item1.jpg",
    //     "./port-item2.jpg",
    //     "./port-item3.jpg",
    //     "./port-item4.jpg",
    //   ],
    //   description:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
    // {
    //   id: 8,
    //   title: "web App",
    //   image: [
    //     "./port-item1.jpg",
    //     "./port-item2.jpg",
    //     "./port-item3.jpg",
    //     "./port-item4.jpg",
    //   ],
    //   description:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
    // {
    //   id: 9,
    //   title: "web App",
    //   image: [
    //     "./port-item1.jpg",
    //     "./port-item2.jpg",
    //     "./port-item3.jpg",
    //     "./port-item4.jpg",
    //   ],
    //   description:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const open = (item) => {
    setSelectedItem(item);
  };

  const close = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="grid2-item p-2 cursor-pointer"
          onClick={() => open(item)}
        >
          <img
            className="m-auto md:w-[100%]"
            src={`./port-item${index + 1}.jpg`}
            alt={`Image ${item.id}`}
          />
        </div>
      ))}

      {selectedItem && (
        <Modal
          setSelectedItem={setSelectedItem}
          item={selectedItem}
          onClose={close}
        />
      )}
    </>
  );
}

export default Card;

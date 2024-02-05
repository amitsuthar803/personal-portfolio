import { useState } from "react";
import Modal from "./Modal";

function Card() {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      id: 1,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],

      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 2,
      title: "Bank App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 3,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 4,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 5,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 6,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 7,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 8,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      id: 9,
      title: "web App",
      image: [
        "./port-item1.jpg",
        "./port-item2.jpg",
        "./port-item3.jpg",
        "./port-item4.jpg",
      ],
      description:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
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
